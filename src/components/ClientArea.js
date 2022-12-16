import { Grid } from "@mui/material";
import CommandList from "./CommandList";
import InputArea from "./InputArea";
import ListGrid from "./loggingArea/List/ListGrid";
import StatusGrid from "./loggingArea/DataGrid/StatusGrid";
import CommandListType from "../constants/CommandListType";

const ClientArea = ({dosTasks, installTasks, downloadTask }) => {

  return (
    <Grid // Main grid that covers the whole client area. There are 3 columnds.
      container
      direction="row"
      alignItems="flex-start"
    >
      <Grid item  // Column 1: displays install and download commands
      >
        <InputArea />
        <CommandList name="Install" list={installTasks} variant={CommandListType.Install} />
        <CommandList key={downloadTask.name} name={downloadTask.name} list={downloadTask.commands} variant={CommandListType.Download} />
      </Grid>  
      <Grid item  // Column 2: displays dos commands
      >
        <Grid
          container
          direction= "column"
          flexWrap="wrap"
        >
          {
            dosTasks.map(t => (t.commands && t.commands.length > 0 && <CommandList key={t.name} name={t.name} variant={CommandListType.Dos} list={t.commands}/>))
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