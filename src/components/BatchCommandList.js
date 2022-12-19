import { Button, Divider, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const BatchCommandList = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(tasks[0].name)
  const [commands, setCommands] = useState(tasks[0].commands)
  
  const handleChange = (e) => {
    const task = tasks.find(t => t.name === e.target.value)
    if (task !== null) {
      setSelectedTask(task.name)
      setCommands(task.commands)
    }
  }

  const populateTasks = () => {
    return (tasks && tasks.map(t => <MenuItem value={t.name} key={t.name} sx={{m:0}}>{ t.name }</MenuItem>))
  }

  const populateCommands = () => {
        return (
            commands.map(c =>
                <ListItem disablePadding key={c.displayText} >
                    <ListItemButton
                        sx={{ height: 16 }}
                        onContextMenu={(e) => e.preventDefault()}
                        // onMouseUp={handleClick}
                    >
                        <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={c.displayText} />
                    </ListItemButton>
                </ListItem>
            )
        )
  }

  return (
    <Box sx={{
      m: 1,
      //width: 220,
      height: 250,
      borderRadius: 1,
      bgcolor: 'white',
      border: '1px solid grey',
      fontSize: '14px',
      flex: "column"
    }}>
      {/* <Divider /> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{mt: 1}}>Batch Commands</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTask}
          // label="Age"
          onChange={e => handleChange(e)}
          sx={{ mt: 2, height: 36 }}
        >
        {populateTasks()}
        </Select>
        <Button variant="contained" >Run</Button>
      </FormControl>
      <Divider sx={{mt: 1}} />
      <List disablePadding dense={true} sx={{mt: 1}}>
        {populateCommands()}
      </List>
    </Box>
  )
}

export default BatchCommandList