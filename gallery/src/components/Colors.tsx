import { Box, Grid, Stack, StackProps, styled, Theme, Tooltip, Typography, useTheme } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

const ColorDropRectangle = styled("div")({
	boxSizing: "border-box",
	position: "relative",

	border: "2px solid #F5F5F5",
	boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1)",
	borderRadius: "20px 20px 20px 0px",

	width: "50px",
	height: "50px",

	"&.big": {
		width: "100px",
		height: "100px",
	},
})

const ColorDropStack = styled(Stack)(({ theme }) => ({
	borderColor: theme.palette.secondary.main,

	padding: "12px",
	alignItems: "center",
	justifyContent: "center",

	"&:first-of-type": {
		marginLeft: "0px",
	},

	"& > .MuiTypography-root": {
		fontWeight: "bold",
		textAlign: "center",
	},
}))

const getColorFromTheme = (colorPath: string) => {
	const theme = useTheme()

	return colorPath.split(".").reduce((acc, key) => acc && (acc as any)[key], theme.palette)
}

const ColorDrop = ({ name, path, big, ...props }: { big?: boolean; name: string; path: string } & StackProps) => {
	const paletteName = `${path}.${name.charAt(0).toLowerCase() + name.slice(1)}`
	const colorValue = getColorFromTheme(paletteName).toString()

	return (
		<ColorDropStack {...props}>
			<Tooltip title={colorValue}>
				<ColorDropRectangle sx={{ backgroundColor: paletteName }} className={big ? "big" : ""} />
			</Tooltip>
			<Typography variant="label" sx={{ mt: 1 }}>
				{name}
			</Typography>
		</ColorDropStack>
	)
}

const GenericPaletteDisplay = ({ title, path, colors }: { title: string; path: string; colors: string[] }) => {
	const layout = calculateGridLayout(colors)
	return (
		<Box>
			<Typography variant="section">{title}</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateAreas: layout,
					gridTemplateColumns: {
						xs: "1fr 1fr", // Two columns for small screens
						md: "repeat(4, 1fr)", // Four columns for medium screens and up
					},
				}}
			>
				{colors.map((color, index) => (
					<ColorDrop
						key={color}
						path={path}
						name={color}
						big={index === 0}
						sx={{ gridArea: String.fromCharCode(97 + index) }} // "a", "b", "c", etc.
					/>
				))}
			</Box>
		</Box>
	)
}

const calculateGridLayout = (colors: string[]): { xs: string; md: string } => {
	const areas = colors.map((_, index) => String.fromCharCode(97 + index))

	const createRows = (areas: string[], columns: number): string[] => {
		const rows: string[] = []
		for (let i = 0; i < areas.length; i += columns) {
			const row = areas.slice(i, i + columns)
			while (row.length < columns) {
				row.push(".")
			}
			rows.push(`"${row.join(" ")}"`)
		}
		return rows
	}

	const xsRows = createRows(areas, 2)
	const mdRows = createRows(areas, 4)

	return {
		xs: xsRows.join(" "),
		md: mdRows.join(" "),
	}
}

type ThemePalette = Theme["palette"]
type PaletteDisplay = Array<{
	name: string
	path: keyof ThemePalette
	colors: string[]
}>

export const Colors = () => {
	const defaultColors = ["Main", "Dark", "Light"]

	const palette: PaletteDisplay = [
		{ name: "Primary colors", path: "primary", colors: defaultColors },
		{ name: "Secondary colors", path: "secondary", colors: defaultColors },
		{ name: "Error colors", path: "error", colors: [...defaultColors, "Accent", "Background"] },
		{ name: "Warning colors", path: "warning", colors: [...defaultColors, "Accent", "Background"] },
		{ name: "Success colors", path: "success", colors: [...defaultColors, "Accent", "Background"] },
		{ name: "Info colors", path: "info", colors: [...defaultColors, "Accent", "Background"] },
		{ name: "News colors", path: "news", colors: ["Main", "Accent", "Background"] },
		{
			name: "Background colors",
			path: "background",
			colors: ["Default", "White", "Beige", "Green", "Gray", "Floating", "DarkGreen"],
		},
		{ name: "Fills colors", path: "fills", colors: ["Primary", "Secondary", "PrimaryHover", "Hover"] },
		{ name: "Text colors", path: "text", colors: ["Primary", "Secondary", "Disabled", "PrimaryInvert"] },
		{ name: "Border colors", path: "borders", colors: ["Default", "Active", "Line", "Highlight", "Disabled", "Inverted"] },
		{ name: "Disabled colors", path: "disabled", colors: ["Main", "Content", "Background"] },
	]
	return (
		<ExampleWrapper title="Fargepalett">
			<Grid container spacing={2}>
				{palette.map(({ name, path, colors }) => (
					<Grid key={path} size={{ xs: 12, sm: 6, lg: 4 }}>
						<GenericPaletteDisplay title={name} path={path} colors={colors} />
					</Grid>
				))}
			</Grid>
		</ExampleWrapper>
	)
}
