import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import RadioButton from "../components/shared/RadioButton";

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
		<>
			<RadioGroup
				row
				aria-labelledby="demo-radio-buttons-group-label"
				value={selectedValue}
				name="radio-buttons-group"
				onChange={(e) => changeEventHanlder(e)}
			>
				{buttonList.map((c) => (
					<RadioButton text={c} />
				))}
			</RadioGroup>
		</>
	);
};
