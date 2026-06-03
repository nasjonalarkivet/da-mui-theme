import AddIcon from "@mui/icons-material/AddOutlined"
import RemoveIcon from "@mui/icons-material/RemoveOutlined"
import Box from "@mui/material/Box"

const ExpandIcon: React.FC = () => {
	return (
		<Box
			sx={{
				".Mui-expanded & > .collapsIconWrapper": {
					display: "none",
				},
				".expandIconWrapper": {
					display: "none",
				},
				".Mui-expanded & > .expandIconWrapper": {
					display: "block",
				},
			}}
		>
			<Box className="expandIconWrapper">
				<RemoveIcon />
			</Box>
			<Box className="collapsIconWrapper">
				<AddIcon />
			</Box>
		</Box>
	)
}

export default ExpandIcon
