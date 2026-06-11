import { Components, Theme } from "@mui/material/styles"
import type { } from "@mui/x-date-pickers/themeAugmentation"
import type { } from "../types/theme.js"
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
import { Dayjs } from "dayjs"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ExpandIcon from "../icons/ExpandIcon.js"
import CheckBoxChecked from "../icons/CheckBoxChecked.js"
import CheckBoxIndeterminate from "../icons/CheckBoxIndeterminate.js"
import CalendarMonthIcon from "../icons/CalendarMonthIcon.js"
import RadioCheckedIcon from "../icons/RadioChecked.js"
import RadioUncheckedIcon from "../icons/RadioUnchecked.js"
import CheckBoxBlank from "../icons/CheckBoxBlank.js"
import { themeTypography, themeBorderRadius } from "./shared.js"

interface ComponentsConfig {
	customShadows: {
		variant1: string
		variant2: string
		variant3: string
	}
}

// Export filterChipStyles for use in custom components
export const createFilterChipStyles = () => ({
	color: 'var(--mui-palette-secondary-main)',
	backgroundColor: 'var(--mui-palette-background-default)',
	border: `1px solid var(--mui-palette-borders-default)`,
	[`&.${chipClasses.root}`]: {
		[`& .${chipClasses.label}`]: {
			padding: 0,
		},
		"&:hover": {
			color: 'var(--mui-palette-text-primaryInvert)',
			backgroundColor: `var(--mui-palette-secondary-main) !important`,
			borderColor: 'var(--mui-palette-secondary-main)',
		},
	},
})

export const createComponents = ({ customShadows }: ComponentsConfig): Components<Theme> => {
	const inputChipStyles = {
		fontWeight: themeTypography.typography.fontWeightBold,
		fontSize: themeTypography.typography.fontSize12,
		padding: 8,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "transparent",

		[`&:not(${chipClasses.colorError}):not(${chipClasses.colorWarning})`]: {
			color: 'var(--mui-palette-text-primary)',
			border: `1px solid var(--mui-palette-borders-default)`,
			backgroundColor: 'var(--mui-palette-background-default)',
			[`& .${chipClasses.deleteIcon}`]: {
				color: 'var(--mui-palette-text-secondary)',
				"&:hover": {
					color: 'var(--mui-palette-text-primary)',
				},
			},
		},
		[`&.${chipClasses.colorError}`]: {
			backgroundColor: 'var(--mui-palette-error-background)',
			borderColor: "transparent",
			[`& .${chipClasses.icon}`]: {
				color: 'var(--mui-palette-error-accent)',
			},
			[`& .${chipClasses.deleteIcon}`]: {
				color: 'var(--mui-palette-error-main)',
			},
			[`&:hover`]: {
				borderColor: 'var(--mui-palette-error-main)',
				[`& .${chipClasses.deleteIcon}`]: {
					color: 'var(--mui-palette-error-main)',
				},
			},
		},
		[`&.${chipClasses.colorWarning}`]: {
			borderColor: "transparent",
			backgroundColor: 'var(--mui-palette-warning-background)',
			[`& .${chipClasses.icon}`]: {
				color: 'var(--mui-palette-warning-accent)',
			},
			[`& .${chipClasses.deleteIcon}`]: {
				color: 'var(--mui-palette-warning-main)',
			},
			[`&:hover`]: {
				borderColor: 'var(--mui-palette-warning-main)',
				[`& .${chipClasses.deleteIcon}`]: {
					color: 'var(--mui-palette-warning-main)',
				},
			},
		},
		[`&.${chipClasses.disabled}`]: {
			color: 'var(--mui-palette-disabled-content)',
			backgroundColor: 'var(--mui-palette-disabled-background)',
			[`& .${chipClasses.deleteIcon}`]: {
				color: 'var(--mui-palette-disabled-content)',
			},
		},
		"&:hover": {
			borderColor: "inherit",
		},
	}

	const actionChipStyles = {
		color: 'var(--mui-palette-secondary-main)',
		borderColor: 'var(--mui-palette-secondary-main)',
		backgroundColor: 'var(--mui-palette-action-chipBackground)',
		borderWidth: 1,
		borderStyle: "solid",
		[`& .${chipClasses.icon}`]: {
			fontSize: themeTypography.typography.fontSize16,
		},
		"&:hover": {
			backgroundColor: 'var(--mui-palette-primary-main)',
			borderColor: 'var(--mui-palette-primary-main)',
			color: 'var(--mui-palette-text-primaryInvert)',
		},
	}

	const filterChipStyles = createFilterChipStyles()

	const selectedOptionStyle = {
		backgroundColor: 'var(--mui-palette-fills-secondary)',
		color: 'var(--mui-palette-text-primaryInvert)',
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
			backgroundColor: 'var(--mui-palette-fills-secondary)',
			color: 'var(--mui-palette-text-primaryInvert)',
		},
		[`&.Mui-focused`]: {
			backgroundColor: 'var(--mui-palette-secondary-main)',
		},
	}

	return {
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
						boxShadow: "0px 0px 0px 1px var(--mui-palette-borders-default)",
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
			],
			styleOverrides: {
				root: ({ theme: themeArg }) => ({
					textTransform: "none",
					fontSize: themeTypography.typography.fontSize16,
					lineHeight: themeTypography.typography.lineHeight150,
					[`&.${buttonBaseClasses.focusVisible}`]: {
						outline: "2px solid var(--mui-palette-borders-active)",
						outlineOffset: 2,
					},
					[themeArg.breakpoints.down("md")]: {
						padding: themeArg.spacing(1.5),
					},
					[themeArg.breakpoints.up("md")]: {
						padding: themeArg.spacing(2),
					},
				}),
				contained: ({ theme: themeArg }) => ({
					[`&.${buttonBaseClasses.disabled}`]: {
						backgroundColor: 'var(--mui-palette-action-disabledBackground)',
						color: 'var(--mui-palette-action-disabled)',
						cursor: "default",
					},
				}),
				outlined: ({ theme: themeArg }) => ({
					[`&.${buttonBaseClasses.root}`]: {
						[`&.${buttonBaseClasses.disabled}`]: {
							color: 'var(--mui-palette-action-disabledBackground)',
							borderColor: 'var(--mui-palette-action-disabledBackground)',
							cursor: "default",
							"&:hover": {
								backgroundColor: "transparent",
								color: 'var(--mui-palette-action-disabledBackground)',
								borderColor: 'var(--mui-palette-action-disabledBackground)',
							},
						},
					},
				}),
				text: ({ theme: themeArg }) => ({
					[`&.${buttonBaseClasses.root}`]: {
						padding: themeArg.spacing(0.5, 1),
						"&:hover": {
							backgroundColor: "transparent",
							textDecoration: "underline",
						},
						[`&.${buttonBaseClasses.disabled}`]: {
							color: 'var(--mui-palette-action-disabledBackground)',
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
				root: ({ theme: themeArg }) => ({
					textTransform: "none",
					padding: themeArg.spacing(2),
					boxShadow: customShadows.variant1,
					[`& .${svgIconClasses.root}`]: {
						marginRight: 8,
					},
					[themeArg.breakpoints.down("md")]: {
						padding: themeArg.spacing(1.5),
						[`& .${svgIconClasses.root}`]: {
							marginRight: 4,
						},
					},
				}),
				secondary: {
					color: 'var(--mui-palette-secondary-main)',
					backgroundColor: 'var(--mui-palette-background-paper)',
					border: `1px solid var(--mui-palette-secondary-main)`,
					"&:hover": {
						backgroundColor: 'var(--mui-palette-primary-main)',
						color: 'var(--mui-palette-text-primaryInvert)',
						borderColor: 'var(--mui-palette-primary-main)',
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
						color: 'var(--mui-palette-background-white)',
					},
					[`&.${checkboxClasses.root}:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]:
					{
						"&:hover": {
							"& svg .checkbox-border": {
								stroke: 'var(--mui-palette-common-black)',
								strokeWidth: 2,
							},
						},
					},
					[`&.${checkboxClasses.disabled}`]: {
						"& svg .checkbox-bg": {
							fill: 'var(--mui-palette-background-gray)',
						},
						"& svg .checkbox-border": {
							stroke: 'var(--mui-palette-borders-disabled)',
						},
					},
					[`&.${checkboxClasses.checked},&.${checkboxClasses.indeterminate}`]: {
						color: 'var(--mui-palette-fills-secondary)',
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
				root: ({ ownerState, theme: themeArg }) => {
					let defaultStyles = {
						alignSelf: "flex-start",
						padding: themeArg.spacing(1.5),
						[`&.${alertClasses.colorSuccess}`]: {
							color: 'var(--mui-palette-success-main)',
							backgroundColor: 'var(--mui-palette-success-background)',
							"& .MuiAlert-icon": {
								color: 'var(--mui-palette-success-accent)',
							},
						},
						[`&.${alertClasses.colorError}`]: {
							color: 'var(--mui-palette-error-main)',
							backgroundColor: 'var(--mui-palette-error-background)',
							"& .MuiAlert-icon": {
								color: 'var(--mui-palette-error-accent)',
							},
						},
						[`&.${alertClasses.colorWarning}`]: {
							color: 'var(--mui-palette-warning-main)',
							backgroundColor: 'var(--mui-palette-warning-background)',
							"& .MuiAlert-icon": {
								color: 'var(--mui-palette-warning-accent)',
							},
						},
						[`&.${alertClasses.colorInfo}`]: {
							color: 'var(--mui-palette-info-main)',
							backgroundColor: 'var(--mui-palette-info-background)',
							"& .MuiAlert-icon": {
								color: 'var(--mui-palette-info-accent)',
							},
						},
						[`&.MuiAlert-colorDisabled`]: {
							backgroundColor: 'var(--mui-palette-disabled-background)',
						},
						[`& .${alertTitleClasses.root}`]: {
							display: "inline-flex",
							marginRight: themeArg.spacing(1),
						},
					}
					const richStyles = {
						...defaultStyles,
						padding: themeArg.spacing(3),
						boxShadow: customShadows.variant3,
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
						padding: themeArg.spacing(1, 1.25),
						[`& .${alertTitleClasses.root}`]: {
							display: "inline-flex",
							marginRight: themeArg.spacing(1),
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
							marginRight: themeArg.spacing(1),
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
					color: 'var(--mui-palette-text-primary)',
					[`&.${switchClasses.disabled}`]: {
						color: 'var(--mui-palette-text-disabled)',
						[`& + .${switchClasses.track}`]: {
							borderColor: 'var(--mui-palette-text-disabled)',
						},
						[`& .${switchClasses.thumb}`]: {
							backgroundColor: 'var(--mui-palette-text-disabled)',
						},
					},
				},
				thumb: {
					boxShadow: "none",
					backgroundColor: 'var(--mui-palette-fills-primary)',
				},
				track: {
					opacity: 1,
					backgroundColor: 'var(--mui-palette-fills-hover)',
					border: `1px solid var(--mui-palette-fills-secondary)`,
					[`.${switchClasses.checked}.${switchClasses.checked} + &`]: {
						opacity: 1,
						backgroundColor: 'var(--mui-palette-borders-highlight)',
					},
					[`.${switchClasses.disabled}.${switchClasses.disabled} + &`]: {
						opacity: 1,
						backgroundColor: 'var(--mui-palette-disabled-background)',
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
					color: 'var(--mui-palette-text-primary)',
					"&:hover": {
						backgroundColor: 'var(--mui-palette-background-default)',
						color: 'var(--mui-palette-primary-main)',
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
					color: 'var(--mui-palette-text-primary)',
					[`&.${radioClasses.checked}`]: {
						color: 'var(--mui-palette-text-primary)',
					},
					[`&.${radioClasses.disabled}`]: {
						color: 'var(--mui-palette-text-disabled)',
						"& svg": {
							"& circle": {
								stroke: 'var(--mui-palette-borders-disabled)',
							},
							"& circle:first-of-type": {
								fill: 'var(--mui-palette-background-gray)',
							},
							"& circle:nth-of-type(2)": {
								// inner circle in checked state
								fill: 'var(--mui-palette-borders-disabled)',
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
						borderColor: 'var(--mui-palette-error-accent)',
					},
					[`&.${outlinedInputClasses.disabled}`]: {
						backgroundColor: 'var(--mui-palette-background-gray)',
					},
					[`&.${outlinedInputClasses.focused}`]: {
						[`& .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: 'var(--mui-palette-borders-active)',
						},
					},
					[`&.${outlinedInputClasses.error}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
					{
						borderColor: 'var(--mui-palette-error-accent)',
					},
				},
				notchedOutline: {
					borderColor: 'var(--mui-palette-borders-default)',
				},
			},
		},
		MuiPickersOutlinedInput: {
			styleOverrides: {
				root: {
					"&.Mui-error .MuiPickersOutlinedInput-notchedOutline": {
						borderColor: 'var(--mui-palette-error-accent)',
					},
					"&.Mui-disabled": {
						backgroundColor: 'var(--mui-palette-background-gray)',
					},
					"&.Mui-focused": {
						"& .MuiPickersOutlinedInput-notchedOutline": {
							borderColor: 'var(--mui-palette-borders-active)',
						},
					},
					"&.Mui-error.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
						borderColor: 'var(--mui-palette-error-accent)',
					},
				},
				notchedOutline: {
					borderColor: 'var(--mui-palette-borders-default)',
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: ({ theme: themeArg }) => ({
					backgroundColor: 'var(--mui-palette-background-input)',
					"&:hover:not(.Mui-disabled)": {
						backgroundColor: 'var(--mui-palette-background-input)',
					},
					"&.Mui-focused:not(.Mui-disabled)": {
						backgroundColor: 'var(--mui-palette-background-input)',
					},
				}),
			},
		},
		MuiMenuItem: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: ({ theme: themeArg }) => ({
					[`&.${menuItemClasses.root}`]: {
						padding: themeArg.spacing(1.5, 2),
						[`&.${menuItemClasses.focusVisible}`]: {
							backgroundColor: 'var(--mui-palette-secondary-main)',
						},
						"&:hover": {
							backgroundColor: 'var(--mui-palette-action-hover)',
						},
						[`&.${menuItemClasses.selected}`]: {
							...selectedOptionStyle,
							"&:hover": {
								backgroundColor: 'var(--mui-palette-secondary-main)',
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
				root: ({ ownerState, theme: themeArg }) => {
					return {
						[`& .${tabsClasses.list}`]: {
							gap: themeArg.spacing(1.5),
						},
						[`& .${tabsClasses.indicator}`]: {
							display: "none",
						},
						[`& .${tabClasses.root}`]: {
							border: `1px solid var(--mui-palette-borders-default)`,
							borderRadius: 4,
							minHeight: "unset",
							[`&:hover`]: {
								borderColor: 'var(--mui-palette-text-primary)',
							},
						},
						[`&.${tabsClasses.root}`]: {
							[`& .${tabClasses.selected}`]: {
								flexDirection: "row",
								gap: themeArg.spacing(0.5),
								color: 'var(--mui-palette-text-primaryInvert)',
								backgroundColor: 'var(--mui-palette-secondary-main)',
								borderColor: 'var(--mui-palette-secondary-main)',
							},
						},
						...(ownerState.color === "content" && {
							[`&.${tabsClasses.root}`]: {
								[`& .${tabClasses.selected}`]: {
									backgroundColor: "none",
								},
							},
							[`& .${tabClasses.root}`]: {
								color: 'var(--mui-palette-text-primary)',
								borderBottom: `1px solid transparent`,
								"&:hover": {
									borderBottom: `1px solid var(--mui-palette-text-primary)`,
								},
							},
							[`& .${tabsClasses.indicator}`]: {
								backgroundColor: 'var(--mui-palette-text-primary)',
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
					color: 'var(--mui-palette-text-primary)',
					borderBottom: '1px solid var(--mui-palette-borders-divider)',
					"&:before": {
						display: 'none',
					},
					"&:last-of-type": {
						borderBottom: 'none',
					},
				},
			},
		},
		MuiAccordionSummary: {
			defaultProps: {
				expandIcon: <ExpandIcon />,
			},
			styleOverrides: {
				expandIconWrapper: {
					color: 'var(--mui-palette-text-primary)',
				},
			},
		},
		MuiAutocomplete: {
			defaultProps: {
				popupIcon: <KeyboardArrowDownIcon />,
			},
			styleOverrides: {
				listbox: ({ theme: themeArg }) => ({
					[`& .${autocompleteClasses.option}`]: {
						padding: themeArg.spacing(1.5, 2),
						[`&:hover`]: {
							color: 'var(--mui-palette-fills-secondary)',
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
				root: ({ theme: themeArg }) => ({
					[`&.MuiChip-filter`]: {
						...filterChipStyles,
					},
					[`&.MuiChip-input`]: {
						...inputChipStyles,
					},
					[`&.MuiChip-action`]: {
						...actionChipStyles,
					},
					padding: `${themeArg.spacing(1)} ${themeArg.spacing(1.5)}`,
				}),
				colorSecondary: {
					...actionChipStyles,
				},
				colorError: {
					color: 'var(--mui-palette-error-main)',
					backgroundColor: 'var(--mui-palette-error-background)',
				},
				colorWarning: {
					color: 'var(--mui-palette-warning-main)',
					backgroundColor: 'var(--mui-palette-warning-background)',
				},
				colorSuccess: {
					color: 'var(--mui-palette-success-main)',
					backgroundColor: 'var(--mui-palette-success-background)',
				},
				colorInfo: {
					color: 'var(--mui-palette-info-main)',
					backgroundColor: 'var(--mui-palette-info-background)',
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
					backgroundColor: 'var(--mui-palette-borders-line)',
				},
				valueLabel: {
					backgroundColor: 'var(--mui-palette-background-floating)',
					color: 'var(--mui-palette-text-primaryInvert)',
					[`&::before`]: {
						/* prefer to avoid this */
						backgroundColor: "transparent",
						borderStyle: "solid",
						borderWidth: "8px 8px 0 8px",
						borderTopColor: 'var(--mui-palette-background-floating)',
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
					backgroundColor: 'var(--mui-palette-background-floating)',
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: 'var(--mui-palette-secondary-main)',
					fontWeight: themeTypography.typography.fontWeightBold,
					"&:hover": {
						color: 'var(--mui-palette-text-primary)',
						textDecoration: "none",
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: ({ theme: themeArg }) => ({
					[`&.${inputBaseClasses.root}`]: {
						backgroundColor: 'var(--mui-palette-background-input)',
						[`& .${inputBaseClasses.input}`]: {
							borderRadius: 2,
						},
						[`&.${inputBaseClasses.disabled}`]: {
							borderColor: 'var(--mui-palette-borders-disabled)',
						},
					},
				}),
				input: ({ theme: themeArg }) => ({
					backgroundColor: "inherit",
					[themeArg.breakpoints.down("md")]: {
						padding: themeArg.spacing(1.5),
						height: themeArg.spacing(3),
					},
					[themeArg.breakpoints.up("md")]: {
						padding: themeArg.spacing(2),
					},
				}),
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme: themeArg }) => ({
					[`&.${inputLabelClasses.focused}:not(.Mui-error)`]: {
						color: 'var(--mui-palette-text-primary)',
					},
					[themeArg.breakpoints.down("md")]: {
						fontSize: themeTypography.typography.fontSize14,
					},
					[themeArg.breakpoints.up("md")]: {
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
						sx: themeArg => ({
							"& .MuiInputBase-input": {
								textTransform: "lowercase",
								display: "flex",
								alignItems: "center",
							},
							"& .MuiInputAdornment-root:has(.clearButton)": {
								position: "absolute",
								right: themeArg.spacing(6),
							},
						}),
					},
					popper: {
						sx: themeArg => ({
							marginTop: `${themeArg.spacing(1)} !important`,
							"& .MuiPaper-root": {
								boxShadow: customShadows.variant2,
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
							backgroundColor: 'var(--mui-palette-fills-secondary)',
							"&:focus": {
								backgroundColor: 'var(--mui-palette-fills-secondary)',
							},
						},
						"&:hover": {
							backgroundColor: 'var(--mui-palette-background-green)',
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
					color: 'var(--mui-palette-text-primary)',
					textTransform: "capitalize",
				},
				root: {
					"& button": {
						borderRadius: 0,
						"&.Mui-selected": {
							borderRadius: themeBorderRadius.borderRadiusSm,
							backgroundColor: 'var(--mui-palette-fills-secondary)',
							"&:focus": {
								backgroundColor: 'var(--mui-palette-fills-secondary)',
							},
						},
						"&:hover": {
							backgroundColor: 'var(--mui-palette-background-green)',
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
					boxShadow: customShadows.variant1,
				},
			},
			defaultProps: {
				slotProps: {
					backdrop: {
						style: {
							backgroundColor: 'var(--mui-palette-background-backdrop)',
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
						boxShadow: customShadows.variant1,
						borderColor: 'var(--mui-palette-borders-default)',
					},
				},
			},
		},
		MuiSelect: {
			defaultProps: {
				IconComponent: KeyboardArrowDownIcon,
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: 'var(--mui-palette-borders-divider)',
				},
			},
		},
	}
}
