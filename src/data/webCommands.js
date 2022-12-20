import URL from '../constants/Url';
import { io } from 'socket.io-client';
import PORT from '../constants/Port';
import SocketEvent from '../constants/SocketEvent';
import ReducerAction from '../constants/ReducerAction';
import { v4 as uuid } from "uuid";

export const fetchAllTasks = async () => {
    try {
        const response = await fetch(URL.ALL_COMMANDS);
        const data = await response.json();
        // if (!data.success)
        // {
        //     throw new Error(data.message);
        // }

        console.log("All command size=", data.length);
        return data;
        // setTasks(data);
        // setTasks(data.filter(t => t.commandGroup === 1))

    } catch (error) {
        console.log("fetchAllTasks error: ", error);
        return null;
    }
}

const commandEvents = [
    SocketEvent.Info,
    SocketEvent.Error,
    SocketEvent.Parameters,
    SocketEvent.Progress
]

const allSocketEvents = [
    ...commandEvents,
    SocketEvent.Connect,
    SocketEvent.Disconnect,
    SocketEvent.ConnectError
]

const createUrl = (commandUrl, taskName, displayText, uiSettings) => {
    let url = commandUrl + "?taskName=" + encodeURIComponent(taskName)

    if (displayText !== null)
        url += "&displayText=" + encodeURIComponent(displayText)
    
    if (uiSettings !== null)        
        url += "&parameters=" + encodeURIComponent(JSON.stringify(uiSettings));

    return url;
}

export const runDosCommand = async (taskName, displayText, uiSettings, dispatch) => {
    const url = createUrl(URL.RUN_COMMAND, taskName, displayText, uiSettings)
    runCommand(url, dispatch)
}

export const runReportCommand = async (taskName, displayText, uiSettings, dispatch) => {
    const url = createUrl(URL.REPORT_COMMAND, taskName, displayText, uiSettings)
    runCommand(url, dispatch)
}

export const runDisplayCommand = async (taskName, displayText, uiSettings, dispatch) => {
    const url = createUrl(URL.DISPLAY_COMMAND, taskName, displayText, uiSettings)
    runCommand(url, dispatch)
}

export const runDisplayTask = async (taskName, uiSettings, dispatch) => {
    const url = createUrl(URL.DISPLAY_TASK, taskName, null, uiSettings)
    runCommand(url, dispatch)
}

export const runInstallCommand = async (taskName, uiSettings, dispatch) => {
    const url = createUrl(URL.INSTALL_COMMAND, taskName, null, uiSettings)
    runCommand(url, dispatch)
}

export const runDownloadCommand = async (taskName, displayText, installerType, dispatch) => {
    const url = createUrl(URL.DOWNLOAD_COMMAND, taskName, displayText, {installerType: `${installerType}`})
    runCommand(url, dispatch)
}

const runCommand = async (url, dispatch) => {
    // console.log(url);

    const socket = io(URL.SOCKET);
    socket.on(SocketEvent.Connect, () => console.log("Connected to socket server", socket.id));
    socket.on(SocketEvent.ConnectError, ()=>{
      setTimeout(() => socket.connect(), PORT.SOCKET)
    })
    socket.on(SocketEvent.Disconnect, () => console.log("Server disconnected"));
    
    // Register socket events for logs
    commandEvents.forEach(socketEvent => socket.on(socketEvent, (data) =>
        dispatch({ type: ReducerAction.AddLog, payload: { id: uuid(), type: socketEvent, log: data } })
    ))
    
    // Register socket event for report results
    socket.on(SocketEvent.Report, data => {
        // console.log("--------", data)
        dispatch({ type: ReducerAction.Report, payload: data })
    })

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.result);

    // Unregister socket events for logs
    allSocketEvents.forEach(e => socket.off(e));
    
    // Unregister socket events for report
    socket.off(SocketEvent.Report)
    socket.disconnect();
}
