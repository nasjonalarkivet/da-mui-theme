import type { DaBadgeClassKey, DaBadgeProps } from "@digitalarkivet/mui-theme/components/DaBadge"
import type { ProgressBarProps } from "@digitalarkivet/mui-theme/components/ProgressBar"
import type { PaletteColorOptions } from "@mui/material/styles"
import type { CSSProperties } from "@mui/material/styles/createMixins.js"
import type { OverridesStyleRules } from "@mui/material/styles/overrides.js"

export type BorderColor = {
	default: string
	active: string
	line: string
	highlight: string
	disabled: string
	inverted: string
	divider: string
}

export type FillColor = {
	primary: string
	secondary: string
	hover: string
	primaryHover: string
}

/**
 * Module augmentations
 */
declare module "@mui/material/styles" {
	interface Theme {
		customShadows: {
			variant1: string
			variant2: string
			variant3: string
		}
		customShape: {
			borderRadiusNone: string
			borderRadiusSm: string
			borderRadiusMd: string
			borderRadiusFull: string
		}
	}

	interface ThemeOptions {
		customShape?: {
			borderRadiusNone?: string
			borderRadiusSm?: string
			borderRadiusMd?: string
			borderRadiusFull?: string
		}
	}

	interface SimplePaletteColorOptions {
		accent?: string
		content?: string
		background: string
	}

	interface PaletteColor extends SimplePaletteColorOptions { }

	interface Palette {
		news: PaletteColor
		neutral: PaletteColor
		disabled: PaletteColor
		borders: BorderColor
		fills: FillColor
	}

	interface PaletteOptions {
		news: PaletteColorOptions
		neutral: PaletteColorOptions
		disabled: PaletteColorOptions
		fills: FillColor
		borders: BorderColor
	}

	interface TypeText {
		primaryInvert: string
	}

	interface TypeAction {
		chipBackground: string
	}

	interface TypeBackground {
		white: string
		green: string
		beige: string
		gray: string
		floating: string
		darkGreen: string
		backdrop: string
		input: string
	}

	interface TypographyVariants {
		fontWeightRoman: CSSProperties["fontWeight"]
		lineHeight100: CSSProperties["lineHeight"]
		lineHeight110: CSSProperties["lineHeight"]
		lineHeight120: CSSProperties["lineHeight"]
		lineHeight125: CSSProperties["lineHeight"]
		lineHeight130: CSSProperties["lineHeight"]
		lineHeight140: CSSProperties["lineHeight"]
		lineHeight150: CSSProperties["lineHeight"]
		fontSize12: CSSProperties["fontSize"]
		fontSize14: CSSProperties["fontSize"]
		fontSize16: CSSProperties["fontSize"]
		fontSize20: CSSProperties["fontSize"]
		fontSize24: CSSProperties["fontSize"]
		fontSize32: CSSProperties["fontSize"]
		fontSize40: CSSProperties["fontSize"]
		fontSize48: CSSProperties["fontSize"]
		fontSize56: CSSProperties["fontSize"]
		fontSize72: CSSProperties["fontSize"]
		fontSize96: CSSProperties["fontSize"]
		body: CSSProperties
		bodyBold: CSSProperties
		bodyLarge: CSSProperties
		bodyLargeBold: CSSProperties
		bodyLink: CSSProperties
		bodyMono: CSSProperties
		buttonLink: CSSProperties
		buttonLinkSmall: CSSProperties
		caption: CSSProperties
		captionBold: CSSProperties
		display1: CSSProperties
		display2: CSSProperties
		display3: CSSProperties
		display4: CSSProperties
		displayHuge: CSSProperties
		input: CSSProperties
		label: CSSProperties
		labelBold: CSSProperties
		labelMono: CSSProperties
		section: CSSProperties
	}

	interface TypographyVariantsOptions {
		fontWeightRoman?: CSSProperties["fontWeight"]
		lineHeight100?: CSSProperties["lineHeight"]
		lineHeight110?: CSSProperties["lineHeight"]
		lineHeight120?: CSSProperties["lineHeight"]
		lineHeight125?: CSSProperties["lineHeight"]
		lineHeight130?: CSSProperties["lineHeight"]
		lineHeight140?: CSSProperties["lineHeight"]
		lineHeight150?: CSSProperties["lineHeight"]
		fontSize12?: CSSProperties["fontSize"]
		fontSize14?: CSSProperties["fontSize"]
		fontSize16?: CSSProperties["fontSize"]
		fontSize20?: CSSProperties["fontSize"]
		fontSize24?: CSSProperties["fontSize"]
		fontSize32?: CSSProperties["fontSize"]
		fontSize40?: CSSProperties["fontSize"]
		fontSize48?: CSSProperties["fontSize"]
		fontSize56?: CSSProperties["fontSize"]
		fontSize72?: CSSProperties["fontSize"]
		fontSize96?: CSSProperties["fontSize"]
		body?: CSSProperties
		bodyBold?: CSSProperties
		bodyLarge?: CSSProperties
		bodyLargeBold?: CSSProperties
		bodyLink?: CSSProperties
		bodyMono?: CSSProperties
		buttonLink?: CSSProperties
		buttonLinkSmall?: CSSProperties
		caption?: CSSProperties
		captionBold?: CSSProperties
		display1?: CSSProperties
		display2?: CSSProperties
		display3?: CSSProperties
		display4?: CSSProperties
		displayHuge?: CSSProperties
		input?: CSSProperties
		label?: CSSProperties
		labelBold?: CSSProperties
		labelMono?: CSSProperties
		section?: CSSProperties
	}

	interface Components {
		DaBadge?: {
			defaultProps?: DaBadgeProps
			styleOverrides?: Partial<OverridesStyleRules<DaBadgeClassKey, "DaBadge", Theme>>
		}
		ProgressBar?: {
			defaultProps?: ProgressBarProps
		}
	}
}

declare module "@mui/material/styles/createTypography.js" {
	interface FontStyle {
		fontWeightRoman: CSSProperties["fontWeight"]
		lineHeight100: CSSProperties["lineHeight"]
		lineHeight110: CSSProperties["lineHeight"]
		lineHeight120: CSSProperties["lineHeight"]
		lineHeight125: CSSProperties["lineHeight"]
		lineHeight130: CSSProperties["lineHeight"]
		lineHeight140: CSSProperties["lineHeight"]
		lineHeight150: CSSProperties["lineHeight"]
		fontSize12: CSSProperties["fontSize"]
		fontSize14: CSSProperties["fontSize"]
		fontSize16: CSSProperties["fontSize"]
		fontSize20: CSSProperties["fontSize"]
		fontSize24: CSSProperties["fontSize"]
		fontSize32: CSSProperties["fontSize"]
		fontSize40: CSSProperties["fontSize"]
		fontSize48: CSSProperties["fontSize"]
		fontSize56: CSSProperties["fontSize"]
		fontSize72: CSSProperties["fontSize"]
		fontSize96: CSSProperties["fontSize"]
	}

	interface Typography {
		body: CSSProperties
		bodyBold: CSSProperties
		bodyLarge: CSSProperties
		bodyLargeBold: CSSProperties
		bodyLink: CSSProperties
		bodyMono: CSSProperties
		buttonLink: CSSProperties
		buttonLinkSmall: CSSProperties
		caption: CSSProperties
		captionBold: CSSProperties
		display1: CSSProperties
		display2: CSSProperties
		display3: CSSProperties
		display4: CSSProperties
		displayHuge: CSSProperties
		input: CSSProperties
		label: CSSProperties
		labelBold: CSSProperties
		labelMono: CSSProperties
		section: CSSProperties
	}

	interface TypographyOptions {
		body?: CSSProperties
		bodyBold?: CSSProperties
		bodyLarge?: CSSProperties
		bodyLargeBold?: CSSProperties
		bodyLink?: CSSProperties
		bodyMono?: CSSProperties
		buttonLink?: CSSProperties
		buttonLinkSmall?: CSSProperties
		caption?: CSSProperties
		captionBold?: CSSProperties
		display1?: CSSProperties
		display2?: CSSProperties
		display3?: CSSProperties
		display4?: CSSProperties
		displayHuge?: CSSProperties
		input?: CSSProperties
		label?: CSSProperties
		labelBold?: CSSProperties
		labelMono?: CSSProperties
		section?: CSSProperties
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		body: true
		bodyBold: true
		bodyLarge: true
		bodyLargeBold: true
		bodyLink: true
		bodyMono: true
		buttonLink: true
		buttonLinkSmall: true
		caption: true
		captionBold: true
		display1: true
		display2: true
		display3: true
		display4: true
		displayHuge: true
		input: true
		label: true
		labelBold: true
		labelMono: true
		section: true
	}
}

declare module "@mui/material/Alert" {
	interface AlertProps {
		size?: "small" | "large"
	}
	interface AlertPropsVariantOverrides {
		rich: true
		plain: true
	}
	interface AlertPropsColorOverrides {
		disabled: true
	}
}

declare module "@mui/material/Tabs" {
	interface TabsPropsColorOverrides {
		content: true
	}
}

declare module "@mui/material/Chip" {
	interface ChipOwnProps {
		selected?: boolean
		diableRipple?: boolean
	}

	interface ChipPropsVariantOverrides {
		filter: true
		input: true
		action: true
	}
}

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		padded: true
	}
}
