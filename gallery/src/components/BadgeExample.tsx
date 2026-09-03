import { DaBadge } from "@digitalarkivet/mui-theme/components/DaBadge"
import { ExampleWrapper } from "./ExampleWrapper"
import { Grid } from "@mui/material"
import { CardGiftcardOutlined as GiftIcon } from "@mui/icons-material"

export const BadgeExample = () => {
	const colorOptions = ["error", "warning", "info", "success", "news"] as const

	const allItems = [
		...colorOptions.map(color => <DaBadge key={color} color={color} label={color} icon={<GiftIcon />} />),
		<DaBadge key="neutral-1" color="neutral" label="neutral" />,
		<DaBadge key="neutral-2" color="neutral" label="neutral" icon={<GiftIcon />} />,
		<DaBadge key="floating-1" color="floating" label="Arkivskaper" />,
		<DaBadge key="floating-2" color="floating" label="Type" icon={<GiftIcon />} />,
	]

	return (
		<ExampleWrapper title="Eksempel på DA-Badges">
			{allItems.map((item, index) => (
				<Grid key={index} size={{ xs: 6, sm: 4, md: 3, lg: 1.7 }}>
					{item}
				</Grid>
			))}
		</ExampleWrapper>
	)
}
