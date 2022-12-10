import { useEffect, useContext, useState, useRef} from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { runDosCommand, runDownloadCommand, runDisplayCommand } from '../data/webCommands';
import { CommandsContext } from '../contexts/CommandsContext';
import CommandListType from '../constants/CommandListType';
import InstallerType from '../constants/InstallerType';
import SupportDoubleClick from './SupportDoubleClick';
import { Support } from '@mui/icons-material';

function CommandList(props) {
    const task = props.task;
    const { uiSettings, dispatch } = useContext(CommandsContext);

    // console.log(task);
    // useEffect(() => {
    // console.log("Populating dos commands: ", task.name);
    // }, [task])

    const onItemClicked = (e, taskName, displayText) => {
        const params = JSON.stringify(uiSettings);
        console.log(e.button);

        const rightClicked = e.type === "contextmenu"
        // console.log(rightClicked)
        if (props.variant === CommandListType.Install) {
            if (e.detail === 2) {
                if (rightClicked) {
                    console.log("right double click")
                }
                else
                    console.log("double click")
            }
        }
        else {
            // runCommand(taskName, displayText, params, dispatch, rightClicked);
        }


        if (rightClicked) {
            // Prevent righ-click context menu from showing up.
            e.preventDefault();
        }
    }

    const handleClick = SupportDoubleClick({
        onDoubleClick: (e) => doubleClick(e),
        onSingleClick: (e) => singleClick(e)
    })

    const singleClick = (e) => {
        const taskName = arguments[0].task.name
        const displayText = e.target.innerText
        // console.log(taskName, displayText)
        
        switch (e.button) {
            case 0:
                if (props.variant === CommandListType.Dos) {
                    console.log('Left single click on Dos command')
                    runDosCommand(taskName, displayText, JSON.stringify(uiSettings), dispatch)
                }
                break;
            case 1:
                if (props.variant === CommandListType.Download) {
                    console.log('Middle single click on Download command')
                    runDownloadCommand(taskName, displayText, InstallerType.Bootstrapper , dispatch)
                }
                break;
            case 2:
                runDisplayCommand(taskName, displayText, JSON.stringify(uiSettings), dispatch)
                console.log('Right single click')
                e.preventDefault();
                break;
            default: return;
        }


    }

    // This event handler is for downloading installers only
    const doubleClick = (e) => {
        if (props.variant !== CommandListType.Download) return;

        const taskName = arguments[0].task.name
        const displayText = e.target.innerText

        switch (e.button) {
            case 0:
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

    // const clicktest =() =>{
    //     // "arguments" contains all arguments passed into this component in props.
    //     // In this case, "task", and "variant"
    //     const task = arguments[0].task
    //     console.log(task.name)
    // }
        
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
                            // onClick={(e) => onItemClicked(e, task.name, c.displayText)}
                            // onContextMenu={(e) => onItemClicked(e, task.name, c.displayText)}
                            onContextMenu={(e) => e.preventDefault()}
                            // onClick={clicktest}
                            // onContextMenu={handleClick}
                            onMouseUp={handleClick}
                            // onMouseUp={(e) => onItemClick(e, task.name, c.displayText)}
                        >
                            <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={c.displayText} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default CommandList;