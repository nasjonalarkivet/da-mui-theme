import theme from "@digitalarkivet/mui-theme/light"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createRoot } from "react-dom/client"
import { Gallery } from "./components/Gallery"

const rootNode = document.getElementById("app")

createRoot(rootNode as HTMLElement).render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Gallery />
	</ThemeProvider>,
)
