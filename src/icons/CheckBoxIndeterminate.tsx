import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const CheckBoxIndeterminate = (props: SvgIconProps) => (
	<SvgIcon {...props} viewBox="0 0 24 24">
		<rect x={0.5} y={0.5} width={23} height={23} rx={2} fill="currentColor" stroke="#fff" strokeWidth={1} />
		<rect x={6} y={11} width={12} height={2} rx={1} fill="#fff" />
	</SvgIcon>
)

export default CheckBoxIndeterminate
