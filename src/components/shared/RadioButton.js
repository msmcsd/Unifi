import { FormControlLabel, Radio } from "@mui/material";
import { Box } from "@mui/system";

const RadioButton = ({ text }) => {
	return (
		<FormControlLabel
			key={text}
			value={text}
			control={
				<Radio
					sx={{
						"& .MuiSvgIcon-root": {
							fontSize: 15,
						},
						pr: 0.5, // Space between radio button circle and its label
						pl: 0,
					}}
				/>
			}
			label={<Box>{text}</Box>}
		/>
	);
};

export default RadioButton;
