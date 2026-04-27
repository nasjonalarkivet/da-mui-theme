import theme from "@digitalarkivet/mui-theme/light"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createRoot } from "react-dom/client"
import { Gallery } from "./components/Gallery"
import { themeCombined } from "@digitalarkivet/mui-theme/main"

const rootNode = document.getElementById("app")

createRoot(rootNode as HTMLElement).render(
	<ThemeProvider theme={themeCombined}>
		<CssBaseline />
		<Gallery />
	</ThemeProvider>,
)
