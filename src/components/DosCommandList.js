import { useEffect} from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

function DosCommandList(props) {
    const task = props.task;

    useEffect(() => {
        console.log("Populating dos commands: ", task.name);
    }, [task])

    return (
        <Box sx={{
            m: 2,
            width: 250,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey'
        }}>{ task.name }
            <Divider/>
            <List disablePadding dense={true}>
                {task.commands.map(c =>
                    <ListItem disablePadding key={c.displayText} >
                        <ListItemButton sx={{height:20}} onClick={() => console.log(c.displayText)}>
                            <ListItemText primary={c.displayText} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default DosCommandList;