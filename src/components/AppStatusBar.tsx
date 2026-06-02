import Alert, { alertClasses, type AlertProps, AlertColor } from "@mui/material/Alert"
import type { SxProps, Theme } from "@mui/material/styles"
import {
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react"

export type AppStatusSeverity = "info" | "warning" | "danger"

export type AppStatusPayload = {
	message_no: string | null
	severity: AppStatusSeverity
}

function toAlertSeverity(severity: AppStatusSeverity): AlertColor {
	const normalized = severity.toLowerCase() as AppStatusSeverity
	return normalized === "danger" ? "error" : normalized
}

const DEFAULT_STATUS_BASE_URL = "https://bakom.digitalarkivet.no/api/status/site"
const DEFAULT_POLL_MS = 30_000

export type AppStatusApplication =
	| "mime"
	| "bakom"
	| "digitalarkivet"
	| "media"
	| "arkivdigitalisering"
	| "login"
	| "noark"
	| "databasetransformasjon"
	| "mottak"
	| "bevaring"
	| "skattogpensjon"

export type AppStatusBarOptions = {
	statusBaseUrl?: string
	pollIntervalMs?: number
	status?: AppStatusPayload | null
	enabled?: boolean
	stickyTop?: number | string
	position?: "sticky" | "static"
}

export function resolveAppStatusFetchUrl(
	statusBaseUrl: string,
	application: AppStatusApplication,
): string {
	const base = statusBaseUrl.replace(/\/+$/, "")
	return `${base}/${encodeURIComponent(application)}`
}

function mergeAlertSx(
	layout: SxProps<Theme>,
	sx: AlertProps["sx"] | undefined,
): SxProps<Theme> {
	if (sx === undefined) {
		return [layout] as SxProps<Theme>
	}
	if (Array.isArray(sx)) {
		return [layout, ...sx] as SxProps<Theme>
	}
	return [layout, sx] as SxProps<Theme>
}

export type AppStatusBarProps = {
	application: AppStatusApplication
	options?: AppStatusBarOptions
} & Omit<AlertProps, "severity" | "children">

function useAppStatusPolling(
	fetchUrl: string,
	pollIntervalMs: number,
	enabled: boolean,
) {
	const [data, setData] = useState<AppStatusPayload | null>(null)
	const [isPending, setIsPending] = useState(enabled)

	const fetchStatus = useCallback(async (signal: AbortSignal) => {
		const response = await fetch(fetchUrl, {
			signal,
			headers: { Accept: "application/json" },
			cache: "no-store",
		})
		if (!response.ok) {
			throw new Error(`App status: HTTP ${response.status}`)
		}
		return response.json() as Promise<AppStatusPayload>
	}, [fetchUrl])

	useEffect(() => {
		if (!enabled) {
			setIsPending(false)
			return
		}

		let cancelled = false
		let inFlight: AbortController | null = null

		setIsPending(true)

		const tick = async () => {
			inFlight?.abort()
			const ac = new AbortController()
			inFlight = ac
			try {
				const json = await fetchStatus(ac.signal)
				if (!cancelled && !ac.signal.aborted) {
					setData(json)
				}
			} catch {
				if (!cancelled && !ac.signal.aborted) {
					setData(null)
				}
			} finally {
				if (!cancelled && !ac.signal.aborted) {
					setIsPending(false)
				}
			}
		}

		void tick()
		const id = globalThis.setInterval(tick, pollIntervalMs)

		return () => {
			cancelled = true
			inFlight?.abort()
			globalThis.clearInterval(id)
		}
	}, [enabled, fetchStatus, pollIntervalMs])

	return { data, isPending }
}

const AppStatusBar = ({
	application,
	options,
	sx,
	...alertProps
}: AppStatusBarProps) => {
	const statusBaseUrl = options?.statusBaseUrl ?? DEFAULT_STATUS_BASE_URL
	const pollIntervalMs = options?.pollIntervalMs ?? DEFAULT_POLL_MS
	const position = options?.position ?? "sticky"
	const stickyTop = options?.stickyTop ?? 0

	const isStatusControlled = options?.status !== undefined

	const fetchUrl = useMemo(
		() => resolveAppStatusFetchUrl(statusBaseUrl, application),
		[application, statusBaseUrl],
	)

	const pollEnabled = !isStatusControlled && options?.enabled !== false

	const { data, isPending } = useAppStatusPolling(
		fetchUrl,
		pollIntervalMs,
		pollEnabled,
	)

	const status = isStatusControlled ? options?.status : data
	const showPending = pollEnabled && isPending

	if (showPending || !status?.message_no) {
		return null
	}

	return (
		<Alert
			{...alertProps}
			severity={toAlertSeverity(status.severity)}
			sx={mergeAlertSx(
				{
					position,
					...(position === "sticky" && {
						top: stickyTop,
						zIndex: (theme) => theme.zIndex.appBar,
					}),
					borderRadius: 0,
					flexShrink: 0,
					width: 1,
					[`& .${alertClasses.message}`]: {
						whiteSpace: "pre-line",
					},
				},
				sx,
			)}
		>
			{status.message_no}
		</Alert>
	)
}

export default AppStatusBar
