import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"

interface ThemeRadioExampleProps {
	mode: 'light' | 'dark' | 'system' | undefined;
	setMode: (mode: 'light' | 'dark' | 'system' | null) => void;
}

export const ThemeRadioExample = ({ mode, setMode }: ThemeRadioExampleProps) => {
	return (
		<FormControl>
			<FormLabel id="theme-toggle-label">Tema</FormLabel>
			<RadioGroup
				aria-labelledby="theme-toggle-label"
				name="theme-toggle"
				row
				value={mode}
				onChange={(event) => setMode(event.target.value as 'light' | 'dark' | 'system')}
			>
				<FormControlLabel value="system" control={<Radio />} label="System" />
				<FormControlLabel value="light" control={<Radio />} label="Lys" />
				<FormControlLabel value="dark" control={<Radio />} label="Mørk" />
			</RadioGroup>
		</FormControl>
	)
}
