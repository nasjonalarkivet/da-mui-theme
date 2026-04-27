import { Box, Container, Tab, Tabs, Typography } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import { Colors } from "./Colors"
import { ButtonExample } from "./ButtonExample"
import { SwitchExample } from "./SwitchExample"
import { RadioExample } from "./RadioExample"
import { FabExample } from "./FabExample"
import { TextFieldExample } from "./TextFieldExample"
import { SelectExample } from "./SelectExample"
import { AutoCompleteExample } from "./AutoCompleteExample"
import { BadgeExample } from "./BadgeExample"
import { AlertExample } from "./AlertExample"
import { DatePickerExample } from "./DatePickerExample"
import { useState } from "react"
import { ProgressBarExample } from "./ProgressBarExample"
import { AccordionExample } from "./AccordionExample"
import { SliderExample } from "./SliderExample"
import { SearchBarExample } from "./SearchBarExample"
import { TextLinkExample } from "./TextLinkExample"
import { CheckboxExample } from "./CheckboxExample"
import { TabExample } from "./TabExample"
import { TypographyExample } from "./TypographyExample"
import { ChipExample } from "./ChipExample"
import { DialogExample } from "./DialogExample"
import { CheckOutlined as CheckIcon } from "@mui/icons-material"
import { ThemeRadioExample } from "./ThemeRadioExample"

const gallery = [
	{ label: "Colors", component: Colors },
	{ label: "Typography", component: TypographyExample },

	{ label: "Button", component: ButtonExample },
	{ label: "Fab", component: FabExample },
	{ label: "Text link", component: TextLinkExample },

	{ label: "Checkbox", component: CheckboxExample },
	{ label: "Radio", component: RadioExample },
	{ label: "Chips", component: ChipExample },
	{ label: "Switch", component: SwitchExample },

	{ label: "TextField", component: TextFieldExample },
	{ label: "Select", component: SelectExample },
	{ label: "AutoComplete", component: AutoCompleteExample },
	{ label: "DatePicker", component: DatePickerExample },
	{ label: "Searchbar", component: SearchBarExample },

	{ label: "Tab", component: TabExample },
	{ label: "Accordion", component: AccordionExample },
	{ label: "Slider", component: SliderExample },
	{ label: "Progress bar", component: ProgressBarExample },

	{ label: "Alert", component: AlertExample },
	{ label: "Dialog", component: DialogExample },
	{ label: "Badge", component: BadgeExample },
]

export const Gallery = () => {
	const [value, setValue] = useState(0)
	const { mode, setMode } = useColorScheme()

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	if (!mode) {
		return null
	}

	return (
		<Container maxWidth="xl">
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
				<Typography variant="h1">Digitalarkivet MUI theme</Typography>
				<ThemeRadioExample mode={mode} setMode={setMode} />
			</Box>
			<Box sx={{ my: 2 }}>
				<Tabs
					onChange={handleChange}
					value={value}
					aria-label="tabs example"
					variant="scrollable"
					scrollButtons="auto"
				>
					{gallery.map((tab, index) => (
						<Tab key={index} label={tab.label} value={index} icon={index === value ? <CheckIcon /> : undefined} />
					))}
				</Tabs>
			</Box>
			{gallery.map((panel, index) => (
				<TabPanel key={index} value={value} index={index}>
					<panel.component />
				</TabPanel>
			))}
		</Container>
	)
}

interface TabPanelProps {
	children?: React.ReactNode
	dir?: string
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</Box>
	)
}
