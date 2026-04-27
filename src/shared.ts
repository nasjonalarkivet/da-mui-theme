import { createTheme } from "@mui/material/styles"


/**
 * Digitalarkivet base typography
 */

const fontFamilies = {
	suisseIntl: ["'Suisse Intl'", "Arial"].join(","),
	suisseNeue: ["'Suisse Neue'", "Times New Roman"].join(","),
	suisseIntlMono: ["'Suisse Intl Mono'", "Arial"].join(","),
}

const themeTypography = createTheme({
	typography: {
		fontSize: 14,
		fontFamily: ["'Suisse Intl'", "'Suisse Intl Mono'", "'Suisse Neue'", "Arial", "sans-serif"].join(","),
		fontWeightBold: 500,
		fontWeightRoman: 400, // Alias for fontWeightRegular
		lineHeight100: 1.0,
		lineHeight110: 1.1,
		lineHeight120: 1.2,
		lineHeight125: 1.25,
		lineHeight130: 1.3,
		lineHeight140: 1.4,
		lineHeight150: 1.5,
		fontSize12: 12,
		fontSize14: 14,
		fontSize16: 16,
		fontSize20: 20,
		fontSize24: 24,
		fontSize32: 32,
		fontSize40: 40,
		fontSize48: 48,
		fontSize56: 56,
		fontSize72: 72,
		fontSize96: 96,
	},
})

/**
 * Brand Colors
 */
const brands = {
	brandGreen: {
		variant05: "#E4F3DD",
		variant1: "#9DF1AD",
		variant2: "#287938",
		variant3: "#1C5B29",
		variant4: "#0A4431",
		variant5: "#0F3329",
	},
	brandBlue: {
		variant1: "#E3ECF9",
	},
	brandOrange: {
		variant1: "#FBEEC8",
		variant2: "#FCD1A4",
		variant3: "#FEB37F",
		variant4: "#FF965B",
		variant5: "#A73C2E",
	},
	brandBeige: {
		variant05: "#FAF9F3",
		variant1: "#E5E2D7",
	},
	brandBlack: {
		variant1: "#000000",
	},
	brandWhite: {
		variant1: "#FFFFFF",
	},
	brandGrey: {
		variant05: "#F8F8F8",
		variant1: "#EBEBEB",
		variant2: "#D7D7D7",
		variant3: "#C2C2C2",
		variant4: "#8E8D8D",
		variant5: "#545454",
		variant6: "#1D1D1D",
	},
}

/**
 * Not shared, but fitting to keep in the same file as brand colors
 */
const darkBrands = {
	brandGreen: {
		variant1: "#22473b",

	},
	brandGrey: {
		variant1: "#161616",
	},
}

const themeBorderRadius = {
	borderRadiusNone: "0px",
	borderRadiusSm: "2px",
	borderRadiusMd: "4px",
	borderRadiusFull: "9999px",
}

const themeShape = {
	borderRadius: 2,
}

const themeShadows = {
	customShadows: {
		variant1: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
		variant2: "0px 8px 20px 5px rgba(0, 0, 0, 0.05)",
		variant3: "0px 12px 20px 10px rgba(0, 0, 0, 0.05)",
	},
}

// Extended typography with custom variants - shared between light and dark
const themeTypographyExtended: any = {
	...themeTypography.typography,
	body: {
		fontFamily: fontFamilies.suisseIntl,
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	bodyBold: {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	bodyLarge: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize20,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	bodyLargeBold: {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize20,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	bodyLink: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	buttonLink: {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	buttonLinkSmall: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize12,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	caption: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize14,
		lineHeight: themeTypography.typography.lineHeight140,
	},
	captionBold: {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize14,
		lineHeight: themeTypography.typography.lineHeight140,
	},
	h1: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize72,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	h2: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize56,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	h3: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize40,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	h4: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize32,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	h5: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize24,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	input: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	label: {
		fontWeight: themeTypography.typography.fontWeightRoman,
		fontSize: themeTypography.typography.fontSize12,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	labelBold: {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize12,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	labelMono: {
		fontFamily: fontFamilies.suisseIntlMono,
		fontSize: themeTypography.typography.fontSize12,
		lineHeight: themeTypography.typography.lineHeight130,
	},
	displayHuge: {
		fontFamily: fontFamilies.suisseNeue,
		fontSize: themeTypography.typography.fontSize48,
		lineHeight: themeTypography.typography.lineHeight125,
		[themeTypography.breakpoints.up("md")]: {
			fontSize: themeTypography.typography.fontSize96,
		},
	},
	display1: {
		fontFamily: fontFamilies.suisseNeue,
		fontSize: themeTypography.typography.fontSize72,
		lineHeight: themeTypography.typography.lineHeight125,
	},
	display2: {
		fontFamily: fontFamilies.suisseNeue,
		fontSize: themeTypography.typography.fontSize56,
		lineHeight: themeTypography.typography.lineHeight125,
	},
	display3: {
		fontFamily: fontFamilies.suisseNeue,
		fontSize: themeTypography.typography.fontSize32,
		lineHeight: themeTypography.typography.lineHeight125,
		[themeTypography.breakpoints.up("md")]: {
			fontSize: themeTypography.typography.fontSize40,
		},
	},
	display4: {
		fontFamily: fontFamilies.suisseNeue,
		fontSize: themeTypography.typography.fontSize24,
		lineHeight: themeTypography.typography.lineHeight125,
		[themeTypography.breakpoints.up("md")]: {
			fontSize: themeTypography.typography.fontSize32,
		},
	},
	section: {
		fontFamily: fontFamilies.suisseIntlMono,
		fontSize: themeTypography.typography.fontSize24,
		lineHeight: themeTypography.typography.lineHeight150,
	},
	bodyMono: {
		fontFamily: fontFamilies.suisseIntlMono,
		fontSize: themeTypography.typography.fontSize16,
		lineHeight: themeTypography.typography.lineHeight150,
	},
}

export { fontFamilies, themeTypography, themeTypographyExtended, brands, darkBrands, themeBorderRadius, themeShape, themeShadows }
