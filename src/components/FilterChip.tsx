import { filterChipStyles } from "@digitalarkivet/mui-theme/light"
import { CheckOutlined } from "@mui/icons-material"
import { Box, Chip, ChipProps } from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { useState } from "react"

const StyledChip = styled(Chip)<ChipProps>(({ theme, selected }) => ({
	...filterChipStyles,
	...(selected && {
		color: theme.palette.text.primaryInvert,
		backgroundColor: theme.palette.secondary.main,
		borderColor: theme.palette.secondary.main,
	}),
}))

interface SelectableChipProps extends Omit<ChipProps, "onClick"> {
	label: string
	onClick?: (isSelected: boolean) => void
	disableRipple?: boolean
}

const FilterChip: React.FC<SelectableChipProps> = ({ label, onClick, ...props }) => {
	const [selected, setSelected] = useState(false)

	const handleClick = () => {
		const newSelectedState = !selected
		setSelected(newSelectedState)
		if (onClick) {
			onClick(newSelectedState)
		}
	}

	return (
		<StyledChip
			{...props}
			//@ts-ignore
			disableRipple
			label={
				<Box sx={{ display: "flex", alignItems: "center" }}>
					{selected && <CheckOutlined sx={{ marginRight: 0.5 }} />}
					{label}
				</Box>
			}
			onClick={handleClick}
			selected={selected}
		/>
	)
}

export default FilterChip
