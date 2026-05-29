import { Box, styled, Typography, useThemeProps } from "@mui/material"
import { forwardRef } from "react"

type DaBadgeColorType = "error" | "warning" | "info" | "success" | "news" | "neutral"

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
})<{ ownerState: DaBadgeOwnerState }>(({ theme, ownerState }) => ({
	display: "inline-flex",
	alignItems: "center",
	padding: theme.spacing(0.5, 1),
	borderRadius: theme.shape.borderRadius,
	fontSize: theme.typography.caption.fontSize,
	fontWeight: theme.typography.fontWeightMedium,
	color: `var(--mui-palette-${ownerState.color}-main)`,
	backgroundColor: `var(--mui-palette-${ownerState.color}-background)`,
	"& .DaBadge-icon": {
		marginRight: theme.spacing(1),
		display: "flex",
		alignItems: "center",
		"& svg": {
			fontSize: theme.typography.caption.fontSize,
		},
	},
	// Apply conditional styles based on the presence of the icon
	...(ownerState.hasIcon && {
		["& .MuiTypography-root"]: {
			lineHeight: 2,
		},
	}),
}))

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
