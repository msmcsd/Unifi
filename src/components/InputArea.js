import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import ReducerAction from "../constants/ReducerAction";
import { CommandsContext } from "../contexts/CommandsContext";

const configs = ["r01", "r02", "qa2"]
const defaultSettings = {
  config: "r01",
  debug: false,
  installFolder: "C:\\Program Files\\123"
}

const InputArea = () => {
  // const [installFolder, setInstallFolder] = useState(defaultSettings.installFolder)
  // const [isDebug, setIsDebug] = useState(defaultSettings.debug)
  // const [config, setConfig] = useState(defaultSettings.config)

  const { uiSettings, dispatchUISettings } = useContext(CommandsContext);
  // console.log(uiSettings)

  const handleInstallFolderChange = (e) => {
    //setInstallFolder(e.target.value)
    // console.log(e.target.value)
    dispatchUISettings({ type: ReducerAction.UpdateInstallFolder, payload: e.target.value})
  }

  const handleIsDebugChange = (e) => {
    // setIsDebug(e.target.checked)
    // console.log(e.target.checked)
    dispatchUISettings({ type: ReducerAction.UpdateDebug, debug: e.target.checked})
  }

  const handleConfigChange = (e) => {
    // setConfig(e.target.value)
    // console.log(e.target.value)
      dispatchUISettings({ type: ReducerAction.UpdateInstallFolder, payload: e.target.value})
  }

  return (
    <Box sx={{
            m: 2,
            width: 250,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey',
            fontSize: '14px'
        }}
        flex="column"
    >Config
      <Divider />
      <Box display="flex" sx={{ml: 2}}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            value={uiSettings.config}
            name="radio-buttons-group"
            onChange={e=>handleConfigChange(e)}
          >
            {
                configs.map(c => <FormControlLabel key={c} value={c} control={<Radio size="small" />} label={<Box fontSize={12}>{c}</Box>} />)
            }
          </RadioGroup>
        </FormControl>
      </Box>
      <Box display="flex" sx={{ml: 2}}>
        <FormControlLabel
          control={<Checkbox size="small" checked={uiSettings.debug} onChange={e=>handleIsDebugChange(e)} />}
          label={<Box fontSize={12}>Debug</Box>} />
      </Box>
      <Divider />
      <Box display="flex" sx={{ml: 2}}>
        <FormControlLabel control={<Typography />} label={<Box fontSize={12}>Install Folder:</Box>} />
        <TextField
          multiline
          value={uiSettings.installFolder}
          inputProps={{ style: { fontSize: 12 } }}
          onChange={(e)=> handleInstallFolderChange(e)}
        />
      </Box>
    </Box>
  )
}

export default InputArea;