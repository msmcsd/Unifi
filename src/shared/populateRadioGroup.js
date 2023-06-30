import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

export const populateRadioButtonGroupWithBox = (
	buttonList,
	selectedValue,
	changeEventHanlder
) => {
	return (
		<Box display="flex" sx={{ ml: 2 }}>
			<FormControl>
				{populateRadioButtonGroup(
					buttonList,
					selectedValue,
					changeEventHanlder
				)}
			</FormControl>
		</Box>
	);
};

export const populateRadioButtonGroup = (
	buttonList,
	selectedValue,
	changeEventHanlder
) => {
	return (
		<RadioGroup
			row
			aria-labelledby="demo-radio-buttons-group-label"
			value={selectedValue}
			name="radio-buttons-group"
			onChange={(e) => changeEventHanlder(e)}
		>
			{buttonList.map((c) => (
				<FormControlLabel
					key={c}
					value={c}
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
					label={<Box>{c}</Box>}
				/>
			))}
		</RadioGroup>
	);
};
