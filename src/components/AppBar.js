import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ClientArea from './ClientArea'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import { fetchAllTasks } from '../data/webCommands';
import CommandGroup from '../constants/CommandGroup';

const drawerWidth = 0;

const defaultTask = {
    "name": "",
    "commandGroup": 1,
    "commands": [
      { "displayText": "" }
    ]
}

function AppBar() {
  const [dosTasks, setTasks] = useState([defaultTask])
  const [installTasks, setInstallTasks] = useState([defaultTask])
  const [downloadTask, setDownloadTask] = useState(defaultTask)
  const [drawerTask, setDrawerTasks] = useState(defaultTask)

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();
      console.log("Fetch all tasks in App.js");
      
      setTasks(data.filter(t => t.commandGroup === CommandGroup.Dos));
      setInstallTasks(data.filter(t => t.commandGroup === CommandGroup.Install));
      // setDownloadTask(data.filter(t => t.commandGroup === CommandGroup.Download )[0]);
      setDownloadTask(data.find(t => t.commandGroup === CommandGroup.Download ));
      setDrawerTasks(data.find(t => t.commandGroup === CommandGroup.Taskbar ));
    }

    fetchTasks();
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <SwipeableTemporaryDrawer task={drawerTask} />
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <ClientArea dosTasks={dosTasks} installTasks={installTasks} downloadTask={downloadTask} />
      </Box>
    </Box>
  );
}

export default AppBar;
