import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import ReducerAction from "../constants/ReducerAction";
import { CommandsContext } from "../contexts/CommandsContext";
import ListHeader from "./ListHeader";

const configs = ["r01", "r02", "qa2"]

const InputArea = ({ variables }) => {
  const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

  const [config, setConfig] = useState(uiSettings.getconfig);
  const theme = useTheme();

  // console.log(uiSettings)

  const [isDebug, setIsDebug] = useState(uiSettings.compilemode === "Debug")

  const handleInstallFolderChange = (e) => {
    //setInstallFolder(e.target.value)
    // console.log(e.target.value)
    dispatch({
			type: ReducerAction.UpdateInstallFolder,
			payload: e.target.value,
		});
  }

  const handleIsDebugChange = (e) => {
    setIsDebug(e.target.checked)
    dispatch({
			type: ReducerAction.UpdateDebug,
			debug: e.target.checked ? "Debug" : "",
		});
  }

  const handleConfigChange = (e) => {
    // setConfig(e.target.value)
    // console.log("e.target.value", e.target.value)
    const token = variables.find(v => v.variable === e.target.value.toUpperCase() + "Token").value
    // console.log("token=", token)
    dispatch({
			type: ReducerAction.UpdateConfig,
			payload: { config: e.target.value, token: `${token}` },
    });
    // setConfig(e.target.value)
  }

  return (
    <Box sx={{
            m: 1,
            // width: 220,
            borderRadius: 1,
            border: '1px solid grey',
        }}
        flex="column"
    >
      <ListHeader name="Config" />
      <Divider />
      <Box display="flex" sx={{ml: 2}}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            value={config}
            name="radio-buttons-group"
            onChange={e=>handleConfigChange(e)}
          >
            {
                configs.map(c => <FormControlLabel key={c} value={c} control={<Radio size="small" />} label={<Box fontSize={12}>{c.toLowerCase()}</Box>} />)
            }
          </RadioGroup>
        </FormControl>
      </Box>
      <Box display="flex" sx={{ml: 2}}>
        <FormControlLabel
          control={<Checkbox size="small" checked={isDebug} onChange={e=>handleIsDebugChange(e)} />}
          label={<Box fontSize={12}>Debug</Box>} />
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column">
        <FormControlLabel sx={{ml: 1, mt: 2}} control={<Typography />} label={<Box fontSize={12}>Install Folder:</Box>} />
        <TextField
          multiline
          value={uiSettings.cylancedesktopfolder}
          inputProps={{ style: { fontSize: 12 } }}
          onChange={(e)=> handleInstallFolderChange(e)}
        />
      </Box>
    </Box>
  )
}

export default InputArea;