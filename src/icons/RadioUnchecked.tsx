import { OverridableComponent } from "@mui/material/OverridableComponent"
import SvgIcon, { SvgIconProps, SvgIconTypeMap } from "@mui/material/SvgIcon"

const RadioUncheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<circle cx="13" cy="12" r="10" fill="white" stroke="#1D1D1D" strokeWidth={1} />
		</SvgIcon>
	),
	{ muiName: "RadioUncheckedIcon" },
)

export default RadioUncheckedIcon
