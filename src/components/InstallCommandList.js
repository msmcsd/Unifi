import { useEffect, useContext} from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { runCommand } from '../data/fetchData';
import { CommandsContext } from '../contexts/CommandsContext';

function InstallCommandList(props) {
    const tasks = props.tasks;
    const {dispatch} = useContext(CommandsContext);

    useEffect(() => {
        // console.log("Populating dos commands: ", task.name);
    }, [tasks])

    const onItemClicked = (taskName, displayText) => {
        
        runCommand(taskName, displayText, dispatch);
    }

    return (
        <Box sx={{
            m: 2,
            width: 250,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey',
            fontSize: '14px'
         }}>{props.name}
            <Divider/>
            <List disablePadding dense={true}>
                {tasks.map(t =>
                    <ListItem disablePadding key={t.name} >
                        <ListItemButton sx={{height:16}} onClick={() => onItemClicked(props.name, t.name)}>
                            <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={t.name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default InstallCommandList;