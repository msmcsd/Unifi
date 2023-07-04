import { Divider } from "@mui/material";

const HorizontalDivider = ({ text, topPadding, bottomPadding }) => {
	// console.log("toppadding", topPadding);

	// const topPad = topPadding ? 3 : 0;
	// const bottomPad = bottomPadding ? 3 : 0;
	const topPad = 3;
	const bottomPad = 3;

	// console.log("topPad", topPad);

	return (
		<Divider
			textAlign="left"
			// variant="middle"
			sx={{
				"&::before": {
					borderColor: "orange",
					width: 0,
				},
				"&::after": {
					borderColor: "orange",
					// width: "70%"
				},
				"& .MuiDivider-wrapper": {
					fontWeight: "bold",
					// fontSize: 13
				},
				pt: 1,
				// pt: `${topPad}`,
				// pb: `${bottomPad}`,
			}}
		>
			{text}
		</Divider>
	);
};

export default HorizontalDivider;
