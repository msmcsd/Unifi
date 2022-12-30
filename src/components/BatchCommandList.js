import { Button, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const BatchCommandList = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState(tasks[0].name)
  const [commands, setCommands] = useState(tasks[0].commands)
  const theme = useTheme()
  
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
      bgcolor: `${theme.typography.listTitle.backgroundColor}`,
      border: '1px solid grey',
      fontSize: `${theme.typography.listTitle.fontSize}`,
      flex: "column"
    }}>Batch Commands
      <Divider />
      {/* <FormControl fullWidth> */}
        {/* <InputLabel id="demo-simple-select-label" sx={{mt: 1}}>Batch Commands</InputLabel> */}
      <Grid container sx={{mt: 1}} >
        <Grid item xs={8}>
          <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedTask}
                // label="Age"
                onChange={e => handleChange(e)}
                sx={{ mt: 0, height: 36 }}
              >
              {populateTasks()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" >Run</Button>
          </Grid>
        </Grid>  
      {/* </FormControl> */}
      <Divider sx={{mt: 1}} />
      <List disablePadding dense={true} sx={{mt: 1}}>
        {populateCommands()}
      </List>
    </Box>
  )
}

export default BatchCommandList