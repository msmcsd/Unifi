import { styled } from "@mui/material";
import { Box } from "@mui/system";

const BaseBox = styled(Box)(({ theme }) => ({
	fontSize: theme.typography.fontSize,
	borderRadius: 3,
	border: "1px solid grey",
	margin: 5,
}));

export default BaseBox;
