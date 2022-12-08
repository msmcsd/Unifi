import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CommandGroup from "../constants/CommandGroup";
import { fetchAllTasks } from "../data/fetchData";
import DosCommandList from "./DosCommandList";
import InputArea from "./InputArea";
import InstallCommandList from "./InstallCommandList";
import ListGrid from "./loggingArea/List/ListGrid";
import StatusGrid from "./loggingArea/DataGrid/StatusGrid";

const defaultTask = {
    "name": "",
    "commandGroup": 1,
    "commands": [
      { "displayText": "" }
    ]
}

const ClientArea = () => {
  const [tasks, setTasks] = useState([defaultTask])
  const [installTasks, setInstallTasks] = useState([defaultTask])
  const [downloadTask, setDownloadTask] = useState(defaultTask)

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetchAllTasks();
      console.log("Fetch all tasks in App.js");
      
      setTasks(data.filter(t => t.commandGroup === CommandGroup.Dos));
      setInstallTasks(data.filter(t => t.commandGroup === CommandGroup.Install));
      // setDownloadTask(data.filter(t => t.commandGroup === CommandGroup.Download )[0]);
      setDownloadTask(data.find(t => t.commandGroup === CommandGroup.Download ));
    }

    fetchTasks();
  }, [])

  return (
    <Grid // Main grid that covers the whole client area. There are 3 columnds.
      container
      direction="row"
      alignItems="flex-start"
    >
      <Grid item  // Column 1: displays install and download commands
      >
        <InputArea />
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
            {/* <StatusGrid/> */}
            <ListGrid />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ClientArea;