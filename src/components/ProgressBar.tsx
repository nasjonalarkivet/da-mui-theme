import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

interface ProgressBarFillProps {
	progress: number
}

const ProgressBarRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(2),
	width: "100%",
}))

const ProgressBarTrack = styled(Box)(({ theme }) => ({
	position: "relative",
	height: 8,
	width: "100%",
	backgroundColor: theme.palette.borders.line,
	borderRadius: theme.shape.borderRadius,
	overflow: "hidden",
}))

const ProgressBarFill = styled(Box)<ProgressBarFillProps>(({ theme, progress }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	height: "100%",
	width: `${progress}%`,
	backgroundColor: theme.palette.fills.secondary,
	transition: "width 0.3s ease",
}))

const ProgressBarLabel = styled(Box)(({ theme }) => ({
	marginRight: theme.spacing(1.5),
	backgroundColor: theme.palette.background.floating,
	color: theme.palette.text.primaryInvert,
	padding: theme.spacing(0.5, 1),
	borderRadius: theme.shape.borderRadius,
}))

export interface ProgressBarProps {
	percentage: number
	showLabel?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 0, showLabel = false }) => {
	return (
		<ProgressBarRoot>
			{showLabel && (
				<ProgressBarLabel>
					<Typography variant="body2">{`${percentage}%`}</Typography>
				</ProgressBarLabel>
			)}
			<ProgressBarTrack>
				<ProgressBarFill progress={percentage} />
			</ProgressBarTrack>
		</ProgressBarRoot>
	)
}

export default ProgressBar
