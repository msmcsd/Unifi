import { useContext, useState } from 'react';
import { Alert, Divider, List, ListItem, ListItemButton, ListItemText, Snackbar, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { runRestCommand } from '../data/webCommands';
import { CommandsContext } from '../contexts/CommandsContext';
import CommandListType from '../constants/CommandListType';
import InstallerType from '../constants/InstallerType';
import SupportDoubleClick from './SupportDoubleClick';
import ReducerAction from '../constants/ReducerAction';
import URL from '../constants/Url';
import CommandType from '../constants/CommandType';
import MuiAlert from '@mui/material/Alert';

function CommandList({name, variant, list}) {
    const { uiSettings, reports, dispatch, dispatchReports } = useContext(CommandsContext);
    const theme = useTheme();

    // console.log(task);
    // useEffect(() => {
    // console.log("Populating dos commands: ", task.name);
    // }, [task])

    // console.log("Command list", reports)

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
                    switch (displayText.toLowerCase()) {
                        case "show installed report":
                        case "show uninstalled report":
                            setOpen(true)
                            runRestCommand(URL.REPORT_COMMAND, taskName, displayText, JSON.stringify(uiSettings), dispatchReports)
                            break;
                        case "clear report":
                            console.log("click clear report")
                            dispatchReports({ type: ReducerAction.ClearReport })
                            break;
                        default:
                            runRestCommand(URL.RUN_COMMAND, taskName, displayText, JSON.stringify(uiSettings), dispatch)    
                    }
                }
                break;
            case 1:
                if (variant === CommandListType.Download) {
                    console.log('Middle single click on Download command')
                    runRestCommand(URL.DOWNLOAD_COMMAND, taskName, displayText, {installerType: `${InstallerType.Bootstrapper}`}, dispatch)
                }
                break;
            case 2:
                if (variant === CommandListType.Install)
                    runRestCommand(URL.DISPLAY_TASK, displayText, null, JSON.stringify(uiSettings), dispatch)
                else
                    runRestCommand(URL.DISPLAY_COMMAND, taskName, displayText, JSON.stringify(uiSettings), dispatch)
                
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
                    runRestCommand(URL.INSTALL_COMMAND, displayText, null, JSON.stringify(uiSettings), dispatch)
                else
                    runRestCommand(URL.DOWNLOAD_COMMAND, taskName, displayText, {installerType: `${InstallerType.Msi}`}, dispatch)
                console.log('left double click')
                break;
            case 2:
                runRestCommand(URL.DOWNLOAD_COMMAND, taskName, displayText, {installerType: `${InstallerType.CyUpgrade}`}, dispatch)
                console.log('right double click')
                e.preventDefault();
                break;
            default: return;
        }
    }

    const populateList = () => {
        return (
            list.map(c =>
                <ListItem
                    disablePadding
                    key={getDisplayText(c)} >
                    <ListItemButton
                        sx={{ height: 16}}
                        onContextMenu={(e) => e.preventDefault()}
                        onMouseUp={handleClick}
                    >
                        <ListItemText
                            primaryTypographyProps={{ fontSize: `${theme.typography.listItem.fontSize}` }}
                            primary={getDisplayText(c)}
                            style={{ color: `${getTextColor(c)}`, backgroundColor: `${getBackgroudColor(c)}` }}
                        />
                    </ListItemButton>
                </ListItem>
            )
        )
    }

    const getDisplayText = (c) => variant === CommandListType.Install ? c.name : c.displayText

    const getTextColor = (c) => {
        if (variant === CommandListType.Dos && c.type === CommandType.Code)
            return theme.typography.listItem.backgroundColorCodeCommand // Green
        
        return "black"
    }

    const getBackgroudColor = (c) => {
        if (reports && variant === CommandListType.Dos) {
            const reportItem = reports.find(i => i.category === name && i.test === c.displayText)
            if (reportItem) {
                if (reportItem.passed) {
                    return theme.typography.listItem.backgroundColorSuccessReport
                }
                else {
                    return theme.typography.listItem.backgroundColorFailedReport
                }
            }
        }

        return ""
    }

    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    
    return (
        <Box sx={{
            m: 1,
            borderRadius: 1,
            border: '1px solid grey',
        }}>
            <Box
                sx={{
                    m: 0,
                    bgcolor: `${theme.typography.listTitle.backgroundColor}`,
                    fontSize: `${theme.typography.listTitle.fontSize}`
                }}
            >{name}
            </Box>
            <Divider sx={{mb: 1}} />
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{ sx: {background: "green"} }}
                message="Report is being generated..."
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                {/* <MuiAlert
                    onClose={handleClose}
                    severity="info"
                    elevation={6}
                    variant="filled"
                    color="success"
                    sx={{ width: '100%' }}>
                    Report is being generated...
                </MuiAlert> */}
            </Snackbar>
            <List disablePadding dense={true} sx={{mb: 1}}>
                {populateList()}
            </List>
        </Box>
    )
}

export default CommandList;