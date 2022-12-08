import { useEffect, useContext} from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { runCommand } from '../data/fetchData';
import { CommandsContext } from '../contexts/CommandsContext';

function DosCommandList(props) {
    const task = props.task;
    const {uiSettings, dispatch} = useContext(CommandsContext);

    // console.log(task);
    // useEffect(() => {
        // console.log("Populating dos commands: ", task.name);
    // }, [task])

    const onItemClicked = (e, taskName, displayText) => {
        const params = JSON.stringify(uiSettings);
        console.log(e.type);

        const showCommand = e.type === "contextmenu"
        runCommand(taskName, displayText, params, dispatch, showCommand);

        if (showCommand) {
            e.preventDefault();
        }
    }

    return (
        <Box sx={{
            m: 2,
            width: 250,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey',
            fontSize: '14px'
        }}>{ task.name }
            <Divider/>
            <List disablePadding dense={true}>
                {task.commands.map(c =>
                    <ListItem disablePadding key={c.displayText} >
                        <ListItemButton
                            sx={{ height: 16 }}
                            onClick={(e) => onItemClicked(e, task.name, c.displayText)}
                            onContextMenu={(e) => onItemClicked(e, task.name, c.displayText)}
                        >
                            <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={c.displayText} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default DosCommandList;