import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { alertClasses } from "@mui/material/Alert"
import { alertTitleClasses } from "@mui/material/AlertTitle"
import { autocompleteClasses } from "@mui/material/Autocomplete"
import { buttonBaseClasses } from "@mui/material/ButtonBase"
import { checkboxClasses } from "@mui/material/Checkbox"
import { chipClasses } from "@mui/material/Chip"
import { inputBaseClasses } from "@mui/material/InputBase"
import { inputLabelClasses } from "@mui/material/InputLabel"
import { menuItemClasses } from "@mui/material/MenuItem"
import { outlinedInputClasses } from "@mui/material/OutlinedInput"
import { radioClasses } from "@mui/material/Radio"
import { svgIconClasses } from "@mui/material/SvgIcon"
import { switchClasses } from "@mui/material/Switch"
import { tabClasses } from "@mui/material/Tab"
import { tabsClasses } from "@mui/material/Tabs"
import { nbNO as coreNbNo } from "@mui/material/locale"
import { alpha, createTheme } from "@mui/material/styles"
import type {} from "@mui/x-date-pickers/themeAugmentation"
import { Dayjs } from "dayjs"
import CalendarMonthIcon from "./icons/CalendarMonthIcon"
import CheckBoxBlank from "./icons/CheckBoxBlank"
import CheckBoxChecked from "./icons/CheckBoxChecked"
import CheckBoxIndeterminate from "./icons/CheckBoxIndeterminate"
import ExpandIcon from "./icons/ExpandIcon"
import RadioCheckedIcon from "./icons/RadioChecked"
import RadioUncheckedIcon from "./icons/RadioUnchecked"

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

const themeShadows = {
	customShadows: {
		variant1: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
		variant2: "0px 8px 20px 5px rgba(0, 0, 0, 0.05)",
		variant3: "0px 12px 20px 10px rgba(0, 0, 0, 0.05)",
	},
}

const themeBorderRadius = {
	borderRadiusNone: "0px",
	borderRadiusSm: "2px",
	borderRadiusMd: "4px",
	borderRadiusFull: "9999px",
}

/**
 * Digitalarkivet palette and typography
 */
const themeColors = createTheme({
	shape: {
		borderRadius: 2,
	},
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
		},
		action: {
			hover: brands.brandGreen.variant05,
		},
	},
	typography: {
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
	},
})

const inputChipStyles = {
	fontWeight: themeTypography.typography.fontWeightBold,
	fontSize: themeTypography.typography.fontSize12,
	padding: 8,
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: "transparent",

	[`&:not(${chipClasses.colorError}):not(${chipClasses.colorWarning})`]: {
		color: themeColors.palette.text.primary,
		border: `1px solid ${themeColors.palette.borders.default}`,
		backgroundColor: themeColors.palette.background.default,
		[`& .${chipClasses.deleteIcon}`]: {
			color: themeColors.palette.text.secondary,
			"&:hover": {
				color: themeColors.palette.text.primary,
			},
		},
	},
	[`&.${chipClasses.colorError}`]: {
		backgroundColor: themeColors.palette.error.background,
		borderColor: "transparent",
		[`& .${chipClasses.icon}`]: {
			color: themeColors.palette.error.accent,
		},
		[`& .${chipClasses.deleteIcon}`]: {
			color: themeColors.palette.error.main,
		},
		[`&:hover`]: {
			borderColor: themeColors.palette.error.main,
			[`& .${chipClasses.deleteIcon}`]: {
				color: themeColors.palette.error.main,
			},
		},
	},
	[`&.${chipClasses.colorWarning}`]: {
		borderColor: "transparent",
		backgroundColor: themeColors.palette.warning.background,
		[`& .${chipClasses.icon}`]: {
			color: themeColors.palette.warning.accent,
		},
		[`& .${chipClasses.deleteIcon}`]: {
			color: themeColors.palette.warning.main,
		},
		[`&:hover`]: {
			borderColor: themeColors.palette.warning.main,
			[`& .${chipClasses.deleteIcon}`]: {
				color: themeColors.palette.warning.main,
			},
		},
	},
	[`&.${chipClasses.disabled}`]: {
		color: themeColors.palette.disabled.content,
		backgroundColor: themeColors.palette.disabled.background,
		[`& .${chipClasses.deleteIcon}`]: {
			color: themeColors.palette.disabled.content,
		},
	},
	"&:hover": {
		borderColor: "inherit",
	},
}

const actionChipStyles = {
	color: themeColors.palette.secondary.main,
	borderColor: themeColors.palette.secondary.main,
	backgroundColor: themeColors.palette.background.white,
	borderWidth: 1,
	borderStyle: "solid",
	[`& .${chipClasses.icon}`]: {
		fontSize: themeTypography.typography.fontSize16,
	},
	"&:hover": {
		backgroundColor: themeColors.palette.primary.main,
		borderColor: themeColors.palette.primary.main,
		color: themeColors.palette.text.primaryInvert,
	},
}

const selectedOptionStyle = {
	backgroundColor: themeColors.palette.fills.secondary,
	color: themeColors.palette.text.primaryInvert,
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "space-between",
	"&::after": {
		content: '""',
		width: 24,
		height: 24,
		flexShrink: 0,
		backgroundImage:
			"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='white' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>\")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	[`&:hover`]: {
		backgroundColor: themeColors.palette.fills.secondary,
		color: themeColors.palette.text.primaryInvert,
	},
	[`&.Mui-focused`]: {
		backgroundColor: themeColors.palette.secondary.main,
	},
}

export const filterChipStyles = {
	color: themeColors.palette.secondary.main,
	backgroundColor: themeColors.palette.background.default,
	border: `1px solid ${themeColors.palette.borders.default}`,
	[`&.${chipClasses.root}`]: {
		[`& .${chipClasses.label}`]: {
			padding: 0,
		},
		"&:hover": {
			color: themeColors.palette.text.primaryInvert,
			backgroundColor: `${themeColors.palette.secondary.main} !important`,
			borderColor: themeColors.palette.secondary.main,
		},
	},
}

/**
 * Digitalarkivet MUI theme
 */

const theme = createTheme(
	{
		components: {
			MuiPaper: {
				variants: [
					{
						props: {
							variant: "padded",
						},
						style: {
							padding: "2rem 3rem",
							marginBottom: "1rem",
							borderRadius: "1px",
							boxShadow: "0px 0px 0px 1px #E0E0E0",
						},
					},
				],
			},
			MuiButton: {
				defaultProps: {
					disableElevation: true,
					disableRipple: true,
					variant: "outlined",
					color: "secondary",
				},
				variants: [
					{
						props: { disabled: true },
						style: {
							[`&.${buttonBaseClasses.root}`]: {
								"&:hover": {
									textDecoration: "none",
								},
							},
						},
					},
					{
						props: { color: "secondary", variant: "outlined" },
						style: {
							"&:hover": {
								color: themeColors.palette.text.primaryInvert,
								backgroundColor: themeColors.palette.primary.main,
								borderColor: themeColors.palette.primary.main,
							},
						},
					},
				],
				styleOverrides: {
					root: ({ theme }) => ({
						textTransform: "none",
						fontSize: themeTypography.typography.fontSize16,
						lineHeight: themeTypography.typography.lineHeight150,
						[theme.breakpoints.down("md")]: {
							padding: theme.spacing(1.5),
						},
						[theme.breakpoints.up("md")]: {
							padding: theme.spacing(2),
						},
					}),
					contained: ({ theme }) => ({
						[`&.${buttonBaseClasses.disabled}`]: {
							backgroundColor: alpha(theme.palette.fills.secondary, 0.4),
							color: theme.palette.text.primaryInvert,
							cursor: "default",
						},
					}),
					outlined: ({ theme }) => ({
						[`&.${buttonBaseClasses.root}`]: {
							[`&.${buttonBaseClasses.disabled}`]: {
								color: alpha(theme.palette.fills.secondary, 0.4),
								borderColor: alpha(theme.palette.fills.secondary, 0.4),
								cursor: "default",
								"&:hover": {
									backgroundColor: "transparent",
									color: alpha(theme.palette.secondary.main, 0.4),
									borderColor: alpha(theme.palette.secondary.main, 0.4),
								},
							},
						},
					}),
					text: ({ theme }) => ({
						[`&.${buttonBaseClasses.root}`]: {
							padding: theme.spacing(0.5, 1),
							"&:hover": {
								backgroundColor: "transparent",
								textDecoration: "underline",
							},
							[`&.${buttonBaseClasses.disabled}`]: {
								color: alpha(theme.palette.fills.secondary, 0.4),
								cursor: "default",
							},
						},
					}),
				},
			},
			MuiFab: {
				defaultProps: {
					color: "primary",
				},
				styleOverrides: {
					root: ({ theme }) => ({
						textTransform: "none",
						padding: theme.spacing(2),
						boxShadow: themeShadows.customShadows.variant1,
						[`& .${svgIconClasses.root}`]: {
							marginRight: 8,
						},
						[theme.breakpoints.down("md")]: {
							padding: theme.spacing(1.5),
							[`& .${svgIconClasses.root}`]: {
								marginRight: 4,
							},
						},
					}),
					secondary: {
						color: themeColors.palette.secondary.main,
						backgroundColor: themeColors.palette.background.paper,
						border: `1px solid ${themeColors.palette.secondary.main}`,
						"&:hover": {
							backgroundColor: themeColors.palette.primary.main,
							color: themeColors.palette.text.primaryInvert,
							borderColor: themeColors.palette.primary.main,
						},
					},
				},
			},
			MuiCheckbox: {
				defaultProps: {
					disableRipple: true,
					icon: <CheckBoxBlank />,
					checkedIcon: <CheckBoxChecked />,
					indeterminateIcon: <CheckBoxIndeterminate />,
				},
				styleOverrides: {
					root: {
						"& svg .checkbox-bg": {
							color: themeColors.palette.background.white,
						},
						[`&.${checkboxClasses.root}:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]:
							{
								"&:hover": {
									"& svg .checkbox-border": {
										stroke: themeColors.palette.common.black,
										strokeWidth: 2,
									},
								},
							},
						[`&.${checkboxClasses.disabled}`]: {
							"& svg .checkbox-bg": {
								fill: themeColors.palette.background.gray,
							},
							"& svg .checkbox-border": {
								stroke: themeColors.palette.borders.disabled,
							},
						},
						[`&.${checkboxClasses.checked},&.${checkboxClasses.indeterminate}`]: {
							color: themeColors.palette.fills.secondary,
						},
						[`&.${checkboxClasses.checked}.${checkboxClasses.disabled},&.${checkboxClasses.indeterminate}.${checkboxClasses.disabled}`]:
							{
								opacity: 0.5,
							},
					},
				},
			},
			MuiAlert: {
				defaultProps: {
					size: "large",
				},
				styleOverrides: {
					root: ({ ownerState, theme }) => {
						let defaultStyles = {
							alignSelf: "flex-start",
							padding: theme.spacing(1.5),
							[`&.${alertClasses.colorSuccess}`]: {
								color: themeColors.palette.success.main,
								backgroundColor: themeColors.palette.success.background,
								"& .MuiAlert-icon": {
									color: themeColors.palette.success.accent,
								},
							},
							[`&.${alertClasses.colorError}`]: {
								color: themeColors.palette.error.main,
								backgroundColor: themeColors.palette.error.background,
								"& .MuiAlert-icon": {
									color: themeColors.palette.error.accent,
								},
							},
							[`&.${alertClasses.colorWarning}`]: {
								color: themeColors.palette.warning.main,
								backgroundColor: themeColors.palette.warning.background,
								"& .MuiAlert-icon": {
									color: themeColors.palette.warning.accent,
								},
							},
							[`&.${alertClasses.colorInfo}`]: {
								color: themeColors.palette.info.main,
								backgroundColor: themeColors.palette.info.background,
								"& .MuiAlert-icon": {
									color: themeColors.palette.info.accent,
								},
							},
							[`&.MuiAlert-colorDisabled`]: {
								backgroundColor: themeColors.palette.disabled.background,
							},
							[`& .${alertTitleClasses.root}`]: {
								display: "inline-flex",
								marginRight: theme.spacing(1),
							},
						}
						const richStyles = {
							...defaultStyles,
							padding: theme.spacing(3),
							boxShadow: themeShadows.customShadows.variant3,
							[`& .${alertClasses.message}`]: {
								padding: 0,
							},
							[`& .${alertTitleClasses.root}`]: {
								fontSize: themeTypography.typography.fontSize24,
							},
						}

						const isRich = ownerState.variant === "rich"
						const isSmall = ownerState.size === "small"

						const smallStyles = {
							...defaultStyles,
							padding: theme.spacing(1, 1.25),
							[`& .${alertTitleClasses.root}`]: {
								display: "inline-flex",
								marginRight: theme.spacing(1),
								marginBottom: 0,
								fontSize: themeTypography.typography.fontSize14,
							},
							[`& .${alertClasses.icon}`]: {
								alignItems: "center",
								fontSize: 16,
							},
						}
						const plainStyles = {
							...defaultStyles,
							[`& .${alertTitleClasses.root}`]: {
								display: "inline-flex",
								marginRight: theme.spacing(1),
								marginBottom: 0,
								fontSize: themeTypography.typography.fontSize16,
							},
						}
						if (isRich) {
							return richStyles
						}
						if (isSmall) {
							return smallStyles
						}
						return plainStyles
					},
				},
			},
			MuiSwitch: {
				defaultProps: {
					color: "primary",
				},
				styleOverrides: {
					colorPrimary: {
						color: themeColors.palette.text.primary,
						[`&.${switchClasses.disabled}`]: {
							color: themeColors.palette.text.disabled,
							[`& + .${switchClasses.track}`]: {
								borderColor: themeColors.palette.text.disabled,
							},
							[`& .${switchClasses.thumb}`]: {
								backgroundColor: themeColors.palette.text.disabled,
							},
						},
					},
					thumb: {
						boxShadow: "none",
						backgroundColor: themeColors.palette.fills.primary,
					},
					track: {
						opacity: 1,
						backgroundColor: themeColors.palette.fills.hover,
						border: `1px solid ${themeColors.palette.fills.secondary}`,
						[`.${switchClasses.checked}.${switchClasses.checked} + &`]: {
							opacity: 1,
							backgroundColor: themeColors.palette.borders.highlight,
						},
						[`.${switchClasses.disabled}.${switchClasses.disabled} + &`]: {
							opacity: 1,
							backgroundColor: themeColors.palette.disabled.background,
						},
					},
				},
			},
			MuiIconButton: {
				defaultProps: {
					disableRipple: true,
				},
				styleOverrides: {
					root: {
						color: themeColors.palette.text.primary,
						"&:hover": {
							backgroundColor: themeColors.palette.background.default,
							color: themeColors.palette.primary.main,
						},
					},
				},
			},
			MuiRadio: {
				defaultProps: {
					icon: <RadioUncheckedIcon />,
					checkedIcon: <RadioCheckedIcon />,
					disableRipple: true,
					disableTouchRipple: true,
				},
				styleOverrides: {
					root: {
						color: themeColors.palette.text.primary,
						[`&.${radioClasses.checked}`]: {
							color: themeColors.palette.text.primary,
						},
						[`&.${radioClasses.disabled}`]: {
							color: themeColors.palette.text.disabled,
							"& svg": {
								"& circle": {
									stroke: themeColors.palette.borders.disabled,
								},
								"& circle:first-of-type": {
									fill: themeColors.palette.background.gray,
								},
								"& circle:nth-of-type(2)": {
									// inner circle in checked state
									fill: themeColors.palette.borders.disabled,
								},
							},
						},
						"&:hover": {
							"& svg circle": {
								strokeWidth: 2,
							},
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						[`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: themeColors.palette.error.accent,
						},
						[`&.${outlinedInputClasses.disabled}`]: {
							backgroundColor: themeColors.palette.background.gray,
						},
						[`&.${outlinedInputClasses.focused}`]: {
							[`& .${outlinedInputClasses.notchedOutline}`]: {
								borderColor: themeColors.palette.borders.active,
							},
						},
						[`&.${outlinedInputClasses.error}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
							{
								borderColor: themeColors.palette.error.accent,
							},
					},
				},
			},
			MuiFilledInput: {
				styleOverrides: {
					root: ({ theme }) => ({
						backgroundColor: theme.palette.background.white,
						"&:hover:not(.Mui-disabled)": {
							backgroundColor: theme.palette.background.white,
						},
						"&.Mui-focused:not(.Mui-disabled)": {
							backgroundColor: theme.palette.background.white,
						},
					}),
				},
			},
			MuiMenuItem: {
				defaultProps: {
					disableRipple: true,
				},
				styleOverrides: {
					root: ({ theme }) => ({
						[`&.${menuItemClasses.root}`]: {
							padding: theme.spacing(1.5, 2),
							[`&.${menuItemClasses.focusVisible}`]: {
								backgroundColor: themeColors.palette.secondary.main,
							},
							"&:hover": {
								backgroundColor: themeColors.palette.action.hover,
							},
							[`&.${menuItemClasses.selected}`]: {
								...selectedOptionStyle,
								"&:hover": {
									backgroundColor: themeColors.palette.secondary.main,
								},
							},
						},
					}),
				},
			},
			MuiTabs: {
				defaultProps: {
					color: "secondary",
				},
				styleOverrides: {
					root: ({ ownerState, theme }) => {
						return {
							[`& .${tabsClasses.list}`]: {
								gap: theme.spacing(1.5),
							},
							[`& .${tabsClasses.indicator}`]: {
								display: "none",
							},
							[`& .${tabClasses.root}`]: {
								border: `1px solid ${themeColors.palette.borders.default}`,
								borderRadius: 4,
								minHeight: "unset",
								[`&:hover`]: {
									borderColor: themeColors.palette.common.black,
								},
							},
							[`&.${tabsClasses.root}`]: {
								[`& .${tabClasses.selected}`]: {
									flexDirection: "row",
									gap: theme.spacing(0.5),
									color: themeColors.palette.text.primaryInvert,
									backgroundColor: themeColors.palette.secondary.main,
									borderColor: themeColors.palette.secondary.main,
								},
							},
							...(ownerState.color === "content" && {
								[`&.${tabsClasses.root}`]: {
									[`& .${tabClasses.selected}`]: {
										backgroundColor: "none",
									},
								},
								[`& .${tabClasses.root}`]: {
									color: themeColors.palette.common.black,
									borderBottom: `1px solid transparent`,
									"&:hover": {
										borderBottom: `1px solid ${themeColors.palette.common.black}`,
									},
								},
								[`& .${tabsClasses.indicator}`]: {
									backgroundColor: themeColors.palette.common.black,
								},
							}),
						}
					},
				},
			},
			MuiTab: {
				defaultProps: {
					disableRipple: true,
				},
				styleOverrides: {
					root: {
						textTransform: "none",
						fontWeight: themeTypography.typography.fontWeightBold,
					},
					icon: {
						marginBottom: 0,
					},
				},
			},
			MuiAccordion: {
				defaultProps: {
					elevation: 0,
				},
				styleOverrides: {
					root: {
						color: themeColors.palette.text.primary,
					},
				},
			},
			MuiAccordionSummary: {
				defaultProps: {
					expandIcon: <ExpandIcon />,
				},
				styleOverrides: {
					expandIconWrapper: {
						color: themeColors.palette.text.primary,
					},
				},
			},
			MuiAutocomplete: {
				defaultProps: {
					popupIcon: <KeyboardArrowDownIcon />,
				},
				styleOverrides: {
					listbox: ({ theme }) => ({
						[`& .${autocompleteClasses.option}`]: {
							padding: theme.spacing(1.5, 2),
							[`&:hover`]: {
								color: theme.palette.fills.secondary,
							},
							[`&[aria-selected='true']`]: {
								...selectedOptionStyle,
							},
						},
					}),
					tag: {
						...inputChipStyles,
					},
				},
			},
			MuiChip: {
				defaultProps: {
					variant: "outlined",
					color: "secondary",
				},
				styleOverrides: {
					root: ({ theme }) => ({
						[`&.MuiChip-filter`]: {
							...filterChipStyles,
						},
						[`&.MuiChip-input`]: {
							...inputChipStyles,
						},
						[`&.MuiChip-action`]: {
							...actionChipStyles,
						},
						padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
					}),
					colorSecondary: {
						...actionChipStyles,
					},
					colorError: {
						color: themeColors.palette.error.main,
						backgroundColor: themeColors.palette.error.background,
					},
					colorWarning: {
						color: themeColors.palette.warning.main,
						backgroundColor: themeColors.palette.warning.background,
					},
					colorSuccess: {
						color: themeColors.palette.success.main,
						backgroundColor: themeColors.palette.success.background,
					},
					colorInfo: {
						color: themeColors.palette.info.main,
						backgroundColor: themeColors.palette.info.background,
					},
				},
			},
			MuiSlider: {
				defaultProps: {
					valueLabelDisplay: "on",
				},
				styleOverrides: {
					rail: {
						opacity: 1,
						backgroundColor: themeColors.palette.background.default,
					},
					valueLabel: {
						backgroundColor: alpha(themeColors.palette.common.black, 0.8),
						[`&::before`]: {
							/* prefer to avoid this */
							backgroundColor: "transparent",
							borderStyle: "solid",
							borderWidth: "8px 8px 0 8px",
							borderTopColor: alpha(themeColors.palette.common.black, 0.8),
							left: "50%",
							transform: "translateX(-50%)",
							borderRightColor: "transparent",
							borderBottomColor: "transparent",
							borderLeftColor: "transparent",
							bottom: "-8px",
						},
					},
				},
			},
			MuiTooltip: {
				styleOverrides: {
					tooltip: {
						backgroundColor: alpha(themeColors.palette.common.black, 0.8),
					},
				},
			},
			MuiLink: {
				styleOverrides: {
					root: {
						color: themeColors.palette.secondary.main,
						fontWeight: themeTypography.typography.fontWeightBold,
						"&:hover": {
							color: themeColors.palette.text.primary,
							textDecoration: "none",
						},
					},
				},
			},
			MuiInputBase: {
				styleOverrides: {
					root: ({ theme }) => ({
						[`&.${inputBaseClasses.root}`]: {
							backgroundColor: theme.palette.background.white,
							[`& .${inputBaseClasses.input}`]: {
								borderRadius: 2,
							},
							[`&.${inputBaseClasses.disabled}`]: {
								borderColor: theme.palette.borders.disabled,
							},
						},
					}),
					input: ({ theme }) => ({
						backgroundColor: "inherit",
						[theme.breakpoints.down("md")]: {
							padding: theme.spacing(1.5),
							height: theme.spacing(3),
						},
						[theme.breakpoints.up("md")]: {
							padding: theme.spacing(2),
						},
					}),
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: ({ theme }) => ({
						[`&.${inputLabelClasses.focused}:not(.Mui-error)`]: {
							color: themeColors.palette.text.primary,
						},
						[theme.breakpoints.down("md")]: {
							fontSize: themeTypography.typography.fontSize14,
						},
						[theme.breakpoints.up("md")]: {
							fontSize: themeTypography.typography.fontSize16,
						},
					}),
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: {
						[`& .MuiInputBase-inputMultiline`]: {
							resize: "vertical",
							minHeight: "136px",
						},
						[`& .MuiFormLabel-root`]: {
							zIndex: 1,
						},
					},
				},
			},
			MuiDatePicker: {
				defaultProps: {
					format: "DD.MM.YYYY",
					slots: {
						openPickerIcon: CalendarMonthIcon,
					},
					showDaysOutsideCurrentMonth: true,
					disableHighlightToday: true,
					slotProps: {
						field: {
							clearable: true,
						},
						textField: {
							sx: {
								"& .MuiInputBase-input": {
									textTransform: "lowercase",
									display: "flex",
									alignItems: "center",
								},
								"& .MuiInputAdornment-root:has(.clearButton)": {
									position: "absolute",
									right: 48,
								},
							},
						},
						popper: {
							sx: theme => ({
								marginTop: `${theme.spacing(1)} !important`,
								"& .MuiPaper-root": {
									boxShadow: theme.customShadows.variant2,
								},
							}),
						},
					},
				},
			},
			MuiPickersLayout: {
				styleOverrides: {
					root: {
						"& .MuiPickersCalendarHeader-label": {
							fontWeight: themeTypography.typography.fontWeightBold,
							textTransform: "capitalize",
						},
					},
				},
			},
			MuiYearCalendar: {
				styleOverrides: {
					root: {
						"& button": {
							borderRadius: 0,
							"&.Mui-selected": {
								backgroundColor: themeColors.palette.fills.secondary,
								"&:focus": {
									backgroundColor: themeColors.palette.fills.secondary,
								},
							},
							"&:hover": {
								backgroundColor: themeColors.palette.background.green,
							},
						},
					},
				},
			},
			MuiDayCalendar: {
				defaultProps: {
					dayOfWeekFormatter: (date: Dayjs) => {
						const fullDay = date.format("dddd")
						return fullDay.substring(0, 3)
					},
				},
				styleOverrides: {
					weekDayLabel: {
						fontWeight: themeTypography.typography.fontWeightBold,
						color: themeColors.palette.text.primary,
						textTransform: "capitalize",
					},
					root: {
						"& button": {
							borderRadius: 0,
							"&.Mui-selected": {
								borderRadius: themeBorderRadius.borderRadiusSm,
								backgroundColor: themeColors.palette.fills.secondary,
								"&:focus": {
									backgroundColor: themeColors.palette.fills.secondary,
								},
							},
							"&:hover": {
								backgroundColor: themeColors.palette.background.green,
							},
						},
					},
				},
			},
			MuiPickersCalendarHeader: {
				defaultProps: {
					slots: {
						switchViewIcon: KeyboardArrowDownIcon,
					},
				},
			},
			MuiDialogActions: {
				styleOverrides: {
					root: {
						justifyContent: "flex-start",
					},
				},
			},
			MuiDialog: {
				styleOverrides: {
					paper: {
						boxShadow: themeShadows.customShadows.variant1,
					},
				},
				defaultProps: {
					slotProps: {
						backdrop: {
							style: {
								backgroundColor: alpha(themeColors.palette.disabled.background, 0.7),
								backdropFilter: "blur(4px)",
							},
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						"&.MuiPaper-outlined": {
							borderRadius: 10,
							boxShadow: themeShadows.customShadows.variant1,
							borderColor: themeColors.palette.borders.default,
						},
					},
				},
			},
			MuiSelect: {
				defaultProps: {
					IconComponent: KeyboardArrowDownIcon,
				},
			},
		},
	},
	themeShadows,
	themeColors,
	coreNbNo,
)

export default theme
