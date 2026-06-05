import CheckOutlined from "@mui/icons-material/CheckOutlined"
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { buttonBaseClasses } from "@mui/material/ButtonBase"
import Menu, { MenuProps } from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { styled } from "@mui/material/styles"
import * as React from "react"

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.customShape.borderRadiusFull,
	display: "flex",
	alignItems: "center",
	fontSize: theme.typography.label.fontSize,
	height: theme.spacing(4),
	[`&.${buttonBaseClasses.root}`]: {
		padding: theme.spacing(1, 1.5),
	},
	[`& .MuiButton-startIcon`]: {
		marginLeft: 0,
	},
}))

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: theme.customShape.borderRadiusSm,
		marginTop: theme.spacing(1),
		minWidth: 180,
		boxShadow: theme.customShadows.variant1,
		"& .MuiMenu-list": {
			padding: theme.spacing(1, 0),
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: 'var(--mui-palette-text-secondary)',
				marginRight: theme.spacing(1.5),
			},
		},
	},
}))

interface ActionChipProps {
	label: string
	startIcon?: React.ReactNode
	menuItems?: Array<{ key: string; label: React.ReactNode }>
	selectedKey?: string
	closeOnSelect?: boolean
	onChange?: (key: string) => void
	onClick?: () => void
	disabled?: boolean
	variant?: "dropdown" | "button"
}

export default function ActionChip({
	label,
	startIcon,
	menuItems = [],
	selectedKey,
	closeOnSelect = false,
	onChange,
	onClick,
	disabled = false,
	variant = "dropdown",
}: ActionChipProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	if (variant === "button") {
		return (
			<StyledButton variant="outlined" disableElevation onClick={onClick} startIcon={startIcon} disabled={disabled}>
				<Box component="span" className="MuiChip-label MuiChip-labelMedium">
					<Box>{label}</Box>
				</Box>
			</StyledButton>
		)
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelect = (key: string) => {
		onChange?.(key)
		if (closeOnSelect) {
			handleClose()
		}
	}

	return (
		<Box>
			<StyledButton
				id="action-chip-button"
				aria-controls={open ? "action-chip-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="outlined"
				disableElevation
				onClick={handleClick}
				startIcon={startIcon}
				endIcon={<KeyboardArrowDownOutlined />}
				disabled={disabled}
			>
				<Box component="span" className="MuiChip-label MuiChip-labelMedium">
					<Box>{label}</Box>
				</Box>
			</StyledButton>
			<StyledMenu
				id="action-chip-menu"
				slotProps={{
					list: {
						"aria-labelledby": "action-chip-button",
					},
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{menuItems.map(({ key, label }) => {
					const isSelected = selectedKey === key
					return (
						<MenuItem
							key={key}
							onClick={() => handleSelect(key)}
							sx={{
								backgroundColor: isSelected ? 'var(--mui-palette-secondary-main)' : undefined,
								color: isSelected ? 'var(--mui-palette-secondary-contrastText)' : 'var(--mui-palette-text-primary)',
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								"&:hover": {
									backgroundColor: isSelected ? 'var(--mui-palette-fills-secondary)' : 'var(--mui-palette-action-hover)',
									color: 'var(--mui-palette-text-primary)',
								},
							}}
						>
							<Box>{label}</Box>
							{isSelected && <CheckOutlined sx={{ color: 'var(--mui-palette-text-primaryInvert)' }} fontSize="small" />}
						</MenuItem>
					)
				})}
			</StyledMenu>
		</Box>
	)
}
