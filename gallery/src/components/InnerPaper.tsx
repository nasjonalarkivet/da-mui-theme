import { Paper, styled } from "@mui/material"
import type { PaperProps } from "@mui/material/Paper"
import type { ComponentType } from "react"

export const InnerPaper: ComponentType<PaperProps> = styled(Paper)({
	maxWidth: "600px",
	padding: "1rem",
	boxShadow:
		"0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14);",
})
