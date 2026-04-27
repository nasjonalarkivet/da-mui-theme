import { alpha, createTheme } from "@mui/material/styles"
import { nbNO as coreNbNo } from "@mui/material/locale"
import { themeTypographyExtended, brands, darkBrands, themeBorderRadius, themeShape, themeShadows } from "./shared"


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
 * Digitalarkivet palette and typography dark mode
 */
const themeColors = createTheme({
	shape: themeShape,
	customShape: themeBorderRadius,
	palette: {
		background: {
			default: darkBrands.brandGrey.variant1,
			paper: brands.brandGrey.variant6,
			floating: alpha(brands.brandBlack.variant1, 0.95),
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
			contrastText: brands.brandBlack.variant1,
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
			main: warnings.error.accent,
			accent: warnings.error.accent,
			background: alpha(warnings.error.accent, 0.2),
		},
		warning: {
			main: warnings.warning.accent,
			accent: warnings.warning.accent,
			background: alpha(warnings.warning.accent, 0.2),
		},
		info: {
			main: warnings.info.accent,
			accent: warnings.info.accent,
			background: alpha(warnings.info.accent, 0.2),
		},
		news: {
			main: warnings.news.accent,
			accent: warnings.news.accent,
			background: alpha(warnings.news.accent, 0.2),
		},
		neutral: {
			main: brands.brandGrey.variant2,
			background: brands.brandGrey.variant5,
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

const themeDark = createTheme(
	themeColors,
	themeShadows,
	coreNbNo,
)

export default themeDark
export const darkCustomShadows = themeShadows.customShadows
