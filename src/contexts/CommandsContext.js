import React, { createContext, useReducer } from 'react';
import { restReducer } from '../reducers/restReducer';
import {Logs, UISettings} from "../initialstates/InitialState";

export const CommandsContext = createContext();

const CommandsContextProvider = (props) => {
    const [logs, dispatchLogs] = useReducer(restReducer, Logs)
    const [uiSettings, dispatchUISettings] = useReducer(restReducer, UISettings)
    const [reports, dispatchReports] = useReducer(restReducer, [])
    
    return (
        <CommandsContext.Provider value={{
                logs, dispatch: dispatchLogs,
                uiSettings, dispatchUISettings,
                reports, dispatchReports  
            }}
        >
            {props.children}
        </CommandsContext.Provider>
    )
}

export default CommandsContextProvider;
