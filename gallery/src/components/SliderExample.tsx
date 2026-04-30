import { Box, Slider } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

export const SliderExample = () => {
	return (
		<ExampleWrapper title="Eksempel på Slider">
			<Box sx={{ width: 500 }}>
				<Slider />
			</Box>
		</ExampleWrapper>
	)
}
