import { useEffect} from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

function DosCommandList(props) {
    const commands = props.commands;

    useEffect(() => {
        console.log("Populating dos commands");
    }, [])

    return (
        <Box sx={{
            m: 2,
            width: 200,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey'
        }}>Check service
            <Divider/>
            <List disablePadding dense={true}>
                {commands.map(c =>
                    <ListItem disablePadding key={c.Name} >
                        <ListItemButton sx={{height:20}} onClick={() => console.log(c.Name)}>
                            <ListItemText primary={c.Name} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default DosCommandList;