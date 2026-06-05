import { OverridableComponent } from "@mui/material/OverridableComponent"
import SvgIcon, { SvgIconProps, SvgIconTypeMap } from "@mui/material/SvgIcon"

const RadioCheckedIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<circle cx="13" cy="12" r="10" fill="white" stroke="#0D0D0D" strokeWidth={2} />
			<circle cx="13" cy="12" r="5" fill="#0D0D0D" />
		</SvgIcon>
	),
	{ muiName: "RadioCheckedIcon" },
)

export default RadioCheckedIcon
