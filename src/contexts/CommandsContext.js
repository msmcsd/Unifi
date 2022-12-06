import React, { createContext, useReducer } from 'react';
import { restReducer } from '../reducers/restReducer';
import {Logs, UISettings} from "../initialstates/InitialState";

export const CommandsContext = createContext();

const CommandsContextProvider = (props) => {
    const [logs, dispatchLogs] = useReducer(restReducer, Logs)
    const [uiSettings, dispatchUISettings] = useReducer(restReducer, UISettings)
    
    return (
        <CommandsContext.Provider value={{logs, dispatch: dispatchLogs, uiSettings, dispatchUISettings}}>
            {props.children}
        </CommandsContext.Provider>
    )
}

export default CommandsContextProvider;
