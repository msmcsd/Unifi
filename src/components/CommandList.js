import { useContext } from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { runDosCommand, runDownloadCommand, runDisplayCommand, runDisplayTask, runInstallCommand } from '../data/webCommands';
import { CommandsContext } from '../contexts/CommandsContext';
import CommandListType from '../constants/CommandListType';
import InstallerType from '../constants/InstallerType';
import SupportDoubleClick from './SupportDoubleClick';

function CommandList({name, variant, list}) {
    const { uiSettings, dispatch } = useContext(CommandsContext);

    // console.log(task);
    // useEffect(() => {
    // console.log("Populating dos commands: ", task.name);
    // }, [task])

    const handleClick = SupportDoubleClick({
        onDoubleClick: (e) => doubleClick(e),
        onSingleClick: (e) => singleClick(e)
    })

    const singleClick = (e) => {
        const taskName = arguments[0].name
        const displayText = e.target.innerText
        // console.log(taskName, displayText)
        
        switch (e.button) {
            case 0:
                if (variant === CommandListType.Dos) {
                    console.log('Left single click on Dos command')
                    runDosCommand(taskName, displayText, JSON.stringify(uiSettings), dispatch)
                }
                break;
            case 1:
                if (variant === CommandListType.Download) {
                    console.log('Middle single click on Download command')
                    runDownloadCommand(taskName, displayText, InstallerType.Bootstrapper , dispatch)
                }
                break;
            case 2:
                if (variant === CommandListType.Install)
                    runDisplayTask(displayText, JSON.stringify(uiSettings), dispatch)
                else
                    runDisplayCommand(taskName, displayText, JSON.stringify(uiSettings), dispatch)
                
                    console.log('Right single click')
                e.preventDefault();
                break;
            default: return;
        }


    }

    // This event handler is for downloading installers only
    const doubleClick = (e) => {
        if (variant === CommandListType.Dos) return;

        const taskName = arguments[0].name
        const displayText = e.target.innerText

        switch (e.button) {
            case 0:
                if (variant === CommandListType.Install)
                    runInstallCommand(displayText, JSON.stringify(uiSettings), dispatch)
                else
                    runDownloadCommand(taskName, displayText, InstallerType.Msi , dispatch)
                console.log('left double click')
                break;
            case 2:
                runDownloadCommand(taskName, displayText, InstallerType.CyUpgrade , dispatch)
                console.log('right double click')
                e.preventDefault();
                break;
            default: return;
        }
    }

    const populateList = () => {
        return (
            list.map(c =>
                <ListItem disablePadding key={getDisplayText(c)} >
                    <ListItemButton
                        sx={{ height: 16 }}
                        onContextMenu={(e) => e.preventDefault()}
                        onMouseUp={handleClick}
                    >
                        <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={getDisplayText(c)} />
                    </ListItemButton>
                </ListItem>
            )
        )
    }

    const getDisplayText = (c) => variant === CommandListType.Install ? c.name : c.displayText

    return (
        <Box sx={{
            m: 1,
            // width: 220,
            borderRadius: 1,
            bgcolor: 'white',
            border: '1px solid grey',
            fontSize: '14px'
        }}>{ name }
            <Divider/>
            <List disablePadding dense={true}>
                {populateList()}
            </List>
        </Box>
    )
}

export default CommandList;