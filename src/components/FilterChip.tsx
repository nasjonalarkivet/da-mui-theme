import CheckOutlined from "@mui/icons-material/CheckOutlined"
import Box from "@mui/material/Box"
import Chip, { ChipProps } from "@mui/material/Chip"
import { styled } from "@mui/material/styles"
import React, { useState } from "react"
import { createFilterChipStyles } from "../config/componentOverrides"

const StyledChip = styled(Chip)<ChipProps>(({ theme, selected }) => ({
	...createFilterChipStyles(),
	...(selected && {
		color: 'var(--mui-palette-text-primaryInvert)',
		backgroundColor: 'var(--mui-palette-secondary-main)',
		borderColor: 'var(--mui-palette-secondary-main)',
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
