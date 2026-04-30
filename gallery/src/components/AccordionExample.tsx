import { CardGiftcardOutlined as GiftIcon, SettingsOutlined as SettingsIcon } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import { ExampleWrapper } from "./ExampleWrapper"

import { DaBadge } from "@digitalarkivet/mui-theme/components/DaBadge"

export const AccordionExample = () => {
	const accordionData = [
		{
			summary: "Teknisk informasjon",
			details: [
				{ label: "Filnavn", value: "Direktør 2.tif" },
				{ label: "Filstørrelse", value: "13091 kB" },
				{ label: "Dimensjoner", value: "2434 x 1829 px" },
				{ label: "Oppløsning", value: "72 ppi" },
				{ label: "Størrelsen", value: "85.87 cm x 64.52 cm" },
			],
		},
		{
			summary: "Metadata",
			details: [
				{ label: "Tittel", value: "Direktør 2" },
				{ label: "Dato", value: "1930" },
				{ label: "Sted", value: "Oslo" },
				{ label: "Fotograf", value: "Hans Hansen" },
			],
		},
	]

	return (
		<ExampleWrapper title="Eksempel på Accordion">
			<Box sx={{ width: 800 }}>
				{accordionData.map(({ summary, details }, index) => (
					<Accordion key={index}>
						<AccordionSummary>
							<Typography variant="h3">{summary}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{details.map(info => (
								<Box key={info.label} sx={{ my: 1 }}>
									<Typography variant="caption">{info.label}</Typography>
									<Typography variant="body2" sx={{ fontFamily: "Suisse Intl Mono" }}>
										{info.value}
									</Typography>
								</Box>
							))}
						</AccordionDetails>
					</Accordion>
				))}
				<Accordion>
					<AccordionSummary>
						<Box sx={{ alignItems: "center", flexDirection: "row", display: "flex", gap: 2, flex: 1 }}>
							<SettingsIcon />
							<Typography variant="h3">Ekstra informasjon</Typography>
							<Box sx={{ ml: "auto", px: 2 }}>
								<DaBadge color="news" label="Nyhet" icon={<GiftIcon />} />
							</Box>
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</ExampleWrapper>
	)
}
