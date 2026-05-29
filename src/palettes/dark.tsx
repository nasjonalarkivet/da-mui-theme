import { alpha, createTheme } from "@mui/material/styles"
import { nbNO as coreNbNo } from "@mui/material/locale"
import { themeTypographyExtended, brands, darkBrands, themeBorderRadius, themeShape, themeShadows } from "../config/shared"


const warnings = {
	error: {
		content: "#FFDCD7",
		accent: "#EB3B00",
		background: "#631901",
	},
	warning: {
		content: "#FFEED1",
		accent: "#E25F00",
		background: "#4D3814",
	},
	info: {
		content: brands.brandBlue.variant1,
		accent: "#2A6AC5",
		background: "#133565",
	},
	news: {
		content: "#E6D9FF",
		accent: "#7540D6",
		background: "#230064",
	},
	neutral: {
		content: brands.brandGrey.variant1,
		background: brands.brandBlack.variant1,
	},
}

/**
 * Digitalarkivet palette and typography dark mode
 */
const themeColors = createTheme({
	shape: themeShape,
	customShape: themeBorderRadius,
	palette: {
		background: {
			default: darkBrands.brandGrey.variant1,
			paper: brands.brandGrey.variant6,
			floating: brands.brandGrey.variant2,
			white: brands.brandWhite.variant1,
			beige: brands.brandBeige.variant05,
			green: brands.brandGreen.variant05,
			gray: brands.brandGrey.variant6,
			darkGreen: brands.brandGreen.variant5,
			backdrop: alpha(brands.brandGrey.variant5, 0.7),
			input: brands.brandGrey.variant5,
		},
		fills: {
			primary: brands.brandGreen.variant2,
			secondary: brands.brandGreen.variant2,
			primaryHover: brands.brandGreen.variant05,
			hover: alpha(brands.brandGreen.variant2, 0.2),
		},
		text: {
			primary: brands.brandWhite.variant1,
			primaryInvert: brands.brandGrey.variant6,
			secondary: brands.brandGrey.variant2,
			disabled: brands.brandGrey.variant4,
		},
		primary: {
			main: brands.brandGreen.variant2,
			contrastText: brands.brandWhite.variant1,
			dark: brands.brandGreen.variant4,
			background: brands.brandGreen.variant2,
		},
		secondary: {
			main: brands.brandGreen.variant1,
			contrastText: brands.brandGrey.variant6,
			dark: brands.brandGreen.variant3,
			background: brands.brandGreen.variant1,
		},
		success: {
			main: brands.brandGreen.variant1,
			light: brands.brandGreen.variant05,
			accent: brands.brandGreen.variant2,
			background: alpha(brands.brandGreen.variant2, 0.2),
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
			main: brands.brandGrey.variant4,
			content: brands.brandGrey.variant4,
			background: brands.brandGrey.variant5,
		},
		borders: {
			default: brands.brandGrey.variant4,
			active: brands.brandGreen.variant1,
			line: brands.brandGrey.variant5,
			highlight: brands.brandGreen.variant2,
			disabled: brands.brandGrey.variant5,
			inverted: brands.brandGrey.variant6,
		},
		action: {
			hover: alpha(brands.brandGreen.variant2, 0.15),
			disabled: brands.brandGrey.variant3,
			disabledBackground: darkBrands.brandGreen.variant1,
			chipBackground: brands.brandBlack.variant1,
		},
	},
	typography: themeTypographyExtended,
})

/**
 * Digitalarkivet MUI theme (dark mode)
 * Note: Components are defined in themeCombined.tsx to support CSS variables
 */

const dark = createTheme(
	themeColors,
	themeShadows,
	coreNbNo,
)

export default dark
export const darkCustomShadows = themeShadows.customShadows
