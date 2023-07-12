import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useContext, useState } from "react";
import { CommandsContext } from "../../contexts/CommandsContext";
import ReducerAction from "../../constants/ReducerAction";
import RadioButton from "../shared/RadioButton";

const BuildRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [build, setBuild] = useState(
		uiSettings.buildtype
  );
  
  	const hanldeBuildChange = (e) => {
			// console.log("product=", e.target.value);
			setBuild(e.target.value);

			dispatch({
				type: ReducerAction.UpdateBuildType,
				payload: {
					buildtype: `${e.target.value}`,
				},
			});
  };
  
  return (
		<Box display="flex" sx={{ ml: 2 }}>
			<FormControl>
				<RadioGroup
					row
					aria-labelledby="demo-radio-buttons-group-label"
					value={build}
					name="radio-buttons-group"
					onChange={(e) => hanldeBuildChange(e)}
				>
          <RadioButton text="Latest"/>
          <RadioButton text="Version"/>
          <RadioButton text="Build Number"/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
}

export default BuildRadioGroup