import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CommandsContext } from '../contexts/CommandsContext';
import { runRestCommand } from '../data/webCommands';
import { Avatar } from '@mui/material';

export default function SwipeableTemporaryDrawer({task}) {
  const { uiSettings, dispatch } = useContext(CommandsContext);
  const [open, setOpen] = useState(false)

  // console.log(task.commands)

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const handleClick = (displayText) => {
    runRestCommand(URL.RUN_COMMAND, task.name, displayText, JSON.stringify(uiSettings), dispatch)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {task.commands.map((command, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{height: 32}} onClick={e => handleClick(command.displayText)}>
              <Avatar sx={{width: 32, height:32}} alt="" src={command.taskImage && require("../images/" + command.taskImage)} />
              <ListItemText sx={{ml: 2}} primary={command.displayText} primaryTypographyProps={{fontSize: 12}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(true)}
        onMouseOver={toggleDrawer(true)}
        // sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  )
}
