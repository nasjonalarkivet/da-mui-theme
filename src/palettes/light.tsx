import { alpha, createTheme } from "@mui/material/styles"
import { nbNO as coreNbNo } from "@mui/material/locale"
import { themeTypographyExtended, brands, themeBorderRadius, themeShape, themeShadows } from "../config/shared.js"


const warnings = {
	error: {
		content: "#631901",
		accent: "#EB3B00",
		background: "#FFDCD7",
	},
	warning: {
		content: "#4D3814",
		accent: "#E25F00",
		background: "#FFEED1",
	},
	info: {
		content: "#133565",
		accent: "#2A6AC5",
		background: brands.brandBlue.variant1,
	},
	news: {
		content: "#230064",
		accent: "#7540D6",
		background: "#E6D9FF",
	},
	neutral: {
		content: brands.brandBlack.variant1,
		background: brands.brandGrey.variant1,
	},
}

/**
 * Digitalarkivet palette and typography light mode
 */
const themeColors = createTheme({
	shape: themeShape,
	customShape: themeBorderRadius,
	palette: {
		background: {
			default: brands.brandBeige.variant05,
			paper: brands.brandWhite.variant1,
			white: brands.brandWhite.variant1,
			beige: brands.brandBeige.variant05,
			green: brands.brandGreen.variant05,
			gray: brands.brandGrey.variant05,
			floating: alpha(brands.brandBlack.variant1, 0.8),
			darkGreen: brands.brandGreen.variant5,
			backdrop: alpha(brands.brandGrey.variant1, 0.7),
			input: brands.brandWhite.variant1,
		},
		fills: {
			primary: brands.brandGreen.variant4,
			secondary: brands.brandGreen.variant3,
			primaryHover: brands.brandBlack.variant1,
			hover: brands.brandGreen.variant05,
		},
		text: {
			primary: brands.brandGrey.variant6,
			primaryInvert: brands.brandWhite.variant1,
			secondary: brands.brandGrey.variant5,
			disabled: brands.brandGrey.variant4,
		},
		primary: {
			main: brands.brandGreen.variant4,
			contrastText: brands.brandWhite.variant1,
			dark: brands.brandBlack.variant1,
			background: brands.brandGreen.variant4,
		},
		secondary: {
			main: brands.brandGreen.variant3,
			contrastText: brands.brandWhite.variant1,
			dark: brands.brandGreen.variant4,
			background: brands.brandGreen.variant3,
		},
		success: {
			main: brands.brandGreen.variant5,
			light: brands.brandGreen.variant1,
			accent: brands.brandGreen.variant3,
			background: brands.brandGreen.variant05,
		},
		error: {
			main: warnings.error.content,
			accent: warnings.error.accent,
			background: warnings.error.background,
		},
		warning: {
			main: warnings.warning.content,
			accent: warnings.warning.accent,
			background: warnings.warning.background,
		},
		info: {
			main: warnings.info.content,
			accent: warnings.info.accent,
			background: warnings.info.background,
		},
		news: {
			main: warnings.news.content,
			accent: warnings.news.accent,
			background: warnings.news.background,
		},
		neutral: {
			main: warnings.neutral.content,
			background: warnings.neutral.background,
		},
		disabled: {
			main: brands.brandGrey.variant5,
			content: brands.brandGrey.variant5,
			background: brands.brandGrey.variant1,
		},
		borders: {
			default: brands.brandGrey.variant3,
			active: brands.brandGrey.variant6,
			line: brands.brandBeige.variant1,
			highlight: brands.brandGreen.variant1,
			disabled: brands.brandGrey.variant1,
			inverted: brands.brandWhite.variant1,
			divider: alpha(brands.brandBlack.variant1, 0.12),
		},
		action: {
			hover: brands.brandGreen.variant05,
			disabled: brands.brandWhite.variant1,
			disabledBackground: alpha(brands.brandGreen.variant3, 0.4),
			chipBackground: brands.brandWhite.variant1,
		},
		scrollbar: {
			thumb: brands.brandGrey.variant3,
			thumbHover: brands.brandGrey.variant4,
			track: brands.brandWhite.variant1,
		},
	},
	typography: themeTypographyExtended,
})

/**
 * Digitalarkivet MUI theme (light mode)
 * Note: Components are defined in themeCombined.tsx to support CSS variables
 */

const light = createTheme(
	themeColors,
	themeShadows,
	coreNbNo,
)

export default light
export const lightCustomShadows = themeShadows.customShadows
