import React, { useState } from "react"
import CameraIcon from "@mui/icons-material/CameraAltOutlined"
import ClearIcon from "@mui/icons-material/CloseOutlined"
import SearchIcon from "@mui/icons-material/SearchOutlined"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import outlinedInputClasses from "@mui/material/OutlinedInput/outlinedInputClasses"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import Tooltip from "@mui/material/Tooltip"
import { styled } from "@mui/material/styles"

const DEFAULT_PHOTO_SEARCH_TITLE = "Søk med bilde"

interface SearchBarProps extends Omit<TextFieldProps<"outlined">, "variant"> {
	value?: string
	photoSearch?: boolean | { enabled: boolean; title?: string } // Enables photo search functionality
	handlePhotoClick?: () => void
}

const StyledSearchBar = styled(TextField)<SearchBarProps>(({ theme }) => ({
	[`& .${outlinedInputClasses.root}`]: {
		borderRadius: "625rem",
		[`& .${outlinedInputClasses.disabled}`]: {
			backgroundColor: theme.palette.borders.disabled,
		},
	},
}))

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>((props, ref) => {
	const { onChange, value: valueProp, photoSearch, handlePhotoClick, ...otherProps } = props

	const [value, setValue] = useState<string>(valueProp ?? "")
	const [isReadOnly, setIsReadOnly] = useState(false)

	const photoSeachTitle =
		typeof photoSearch === "boolean" ? DEFAULT_PHOTO_SEARCH_TITLE : photoSearch?.title || DEFAULT_PHOTO_SEARCH_TITLE

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		onChange?.(event)
	}

	const handleClear = () => {
		setValue("")
		setIsReadOnly(false)

		if (onChange) {
			onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
		}
	}

	return (
		<Box style={{ position: "relative" }}>
			<StyledSearchBar
				inputRef={ref}
				variant="outlined"
				value={valueProp ?? value}
				onChange={handleChange}
				slotProps={{
					input: {
						readOnly: isReadOnly,
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
						endAdornment: (
							<>
								<InputAdornment position="end" sx={{ visibility: value ? "visible" : "hidden" }}>
									<IconButton onClick={handleClear}>
										<ClearIcon />
									</IconButton>
								</InputAdornment>
								{photoSearch && (typeof photoSearch === "boolean" || photoSearch?.enabled) && (
									<InputAdornment position="end">
										<Tooltip title={photoSeachTitle} arrow>
											<IconButton onClick={handlePhotoClick}>
												<CameraIcon />
											</IconButton>
										</Tooltip>
									</InputAdornment>
								)}
							</>
						),
					},
				}}
				{...otherProps}
			/>
		</Box>
	)
})

export default SearchBar
