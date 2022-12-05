import React, { createContext, useReducer } from 'react';
import { restReducer } from '../reducers/restReducer';

export const CommandsContext = createContext();

const CommandsContextProvider = (props) => {
    const [logs, dispatch] = useReducer(restReducer, [])
    
    return (
        <CommandsContext.Provider value={{logs, dispatch}}>
            {props.children}
        </CommandsContext.Provider>
    )
}

export default CommandsContextProvider;
