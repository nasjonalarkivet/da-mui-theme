import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

const CheckBoxChecked = (props: SvgIconProps) => (
	<SvgIcon {...props} viewBox="0 0 24 24">
		<rect x={0.5} y={0.5} width={23} height={23} rx={2} fill="currentColor" stroke="#fff" strokeWidth={1} />
		<path d="M10 16.401L6 12.401L7.4 11.001L10 13.601L16.6 7.00098L18 8.40098L10 16.401Z" fill="#fff" />
	</SvgIcon>
)

export default CheckBoxChecked
