import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled, useThemeProps } from "@mui/material/styles"
import { forwardRef } from "react"

type DaBadgeColorType = "error" | "warning" | "info" | "success" | "news" | "neutral" | "floating"

export interface DaBadgeProps {
	label: string
	color?: DaBadgeColorType
	icon?: React.ReactNode
}

interface DaBadgeOwnerState extends DaBadgeProps {
	color: DaBadgeColorType
	hasIcon: boolean
}

export type DaBadgeClassKey = "root" | "icon" | "label"

const DaBadgeRoot = styled("div", {
	name: "DaBadge",
	slot: "Root",
	overridesResolver: (props, styles) => styles.root,
})<{ ownerState: DaBadgeOwnerState }>(({ theme, ownerState }) => {
	const badgeColors = ownerState.color === "floating"
		? {
				color: theme.palette.text.primaryInvert,
				backgroundColor: theme.palette.background.floating,
			}
		: {
				color: `var(--mui-palette-${ownerState.color}-main)`,
				backgroundColor: `var(--mui-palette-${ownerState.color}-background)`,
			}

	return {
		display: "inline-flex",
		alignItems: "center",
		padding: theme.spacing(0.5, 1),
		borderRadius: theme.shape.borderRadius,
		fontSize: theme.typography.caption.fontSize,
		...badgeColors,
		"& .DaBadge-icon": {
			marginRight: theme.spacing(1),
			display: "flex",
			alignItems: "center",
			"& svg": {
				fontSize: theme.typography.caption.fontSize,
			},
			...(ownerState.color === "floating" && {
				"& svg": {
					fontSize: theme.typography.fontSize16,
				},
			}),
		},
		...(ownerState.hasIcon && ownerState.color !== "floating" && {
			"& .MuiTypography-root": {
				lineHeight: 2,
			},
		}),
	}
})

export const DaBadge = forwardRef<HTMLDivElement, DaBadgeProps>(function DaBadge(inProps, ref) {
	const props = useThemeProps({ props: inProps, name: "DaBadge" })
	const { label, color = "neutral", icon, ...other } = props

	const ownerState: DaBadgeOwnerState = {
		...props,
		color,
		hasIcon: !!icon,
	}

	return (
		<DaBadgeRoot ref={ref} ownerState={ownerState} className={`DaBadge-root color-${ownerState.color}`}>
			{icon && (
				<Box component="span" className="DaBadge-icon">
					{icon}
				</Box>
			)}
			<Typography variant="labelMono">{label}</Typography>
		</DaBadgeRoot>
	)
})
