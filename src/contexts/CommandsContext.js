import React, { createContext } from 'react';

export const CommansContext = createContext();

function CommandsContextProvider() {
    
    return (
        <CommansContext.Provider>
            {this.props.children}
        </CommansContext.Provider>
    )
}

export default CommandsContextProvider;
