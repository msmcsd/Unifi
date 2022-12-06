import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CommandsContextProvider from './contexts/CommandsContext';
import DosCommandList from './components/DosCommandList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { fetchAllTasks } from './data/fetchData';
import StatusGrid from './components/StatusGrid';
import { Grid } from '@mui/material';
import CommandGroup from "./constants/CommandGroup";
import InstallCommandList from './components/InstallCommandList';

const defaultTask = {
    "name": "",
    "commandGroup": 1,
    "commands": [
      { "displayText": "" }
    ]
}

function App() {
  const [tasks, setTasks] = useState([defaultTask])
  const [installTasks, setInstallTasks] = useState([defaultTask])
  const [downloadTask, setDownloadTask] = useState(defaultTask)

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();
      console.log("Fetch all tasks in App.js");
      
      setTasks(data.filter(t => t.commandGroup === CommandGroup.Dos));
      setInstallTasks(data.filter(t => t.commandGroup === CommandGroup.Install));
      setDownloadTask(data.filter(t => t.commandGroup === CommandGroup.Download )[0]);
    }

    fetchTasks();
  }, [])

  const theme = createTheme()

  return (
    <div className="App">
      <CommandsContextProvider>
      <ThemeProvider theme={theme}>
        <Grid // Main grid that covers the whole client area. There are 3 columnds.
          container
          direction="row"
          alignItems="flex-start"
        >
          <Grid item  // Column 1: displays install and download commands
            >
              <InstallCommandList name="Install" tasks={installTasks} />
              <DosCommandList key={downloadTask.name} task={downloadTask} />
          </Grid>  
          <Grid item  // Column 2: displays dos commands
          >
            <Grid
              container
              direction= "column"
              flexWrap="wrap"
            >
              {
                tasks.map(t => (t.commands && t.commands.length > 0 && <DosCommandList key={t.name} task={t} />))
              }
            </Grid>
          </Grid>
          <Grid item // Column 3: displays logs
          > 
            <Grid
            container
            flexGrow={1}
            >
              <Grid item>
                <StatusGrid/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        </ThemeProvider>
      </CommandsContextProvider>
    </div>
  )
}

export default App;
