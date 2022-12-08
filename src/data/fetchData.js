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

export const runCommand = async (taskName, displayText, uisettings, dispatch, showCommand) => {
    // console.log(taskName, displayText);
    const url = (showCommand? URL.SHOW_COMMAND : URL.RUN_COMMAND) + "?taskName=" + encodeURIComponent(taskName)
        + "&displayText=" + encodeURIComponent(displayText)
        + "&parameters=" + encodeURIComponent(JSON.stringify(uisettings));
    console.log(url);

    const socket = io(URL.SOCKET);
    socket.on(SocketEvent.Connect, () => console.log("Connected to socket server", socket.id));
    socket.on(SocketEvent.ConnectError, ()=>{
      setTimeout(() => socket.connect(), PORT.SOCKET)
    })
    socket.on(SocketEvent.Disconnect, () => console.log("Server disconnected"));
    
    commandEvents.forEach(socketEvent => socket.on(socketEvent, (data) =>
        dispatch({ type: ReducerAction.AddLog, payload: { id: uuid(), type: socketEvent, log: data } })
    ))
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.result);

    // Unregister events
    allSocketEvents.forEach(e => socket.off(e));
    socket.disconnect();
}
