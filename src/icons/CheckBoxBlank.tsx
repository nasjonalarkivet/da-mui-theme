import { OverridableComponent } from "@mui/material/OverridableComponent"
import SvgIcon, { SvgIconProps, SvgIconTypeMap } from "@mui/material/SvgIcon"

const CheckBoxBlank: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string
} = Object.assign(
	(props: SvgIconProps) => (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<rect className="checkbox-bg" x={0.5} y={0.5} width={23} height={23} rx={2} fill="currentColor" />
			<rect
				className="checkbox-border"
				x={0.5}
				y={0.5}
				width={23}
				height={23}
				rx={2}
				fill="none"
				stroke="#1D1D1D"
				strokeWidth={1}
			/>
		</SvgIcon>
	),
	{ muiName: "CheckBoxBlank" },
)

export default CheckBoxBlank
