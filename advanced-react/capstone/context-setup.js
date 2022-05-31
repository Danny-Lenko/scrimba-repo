import React, {useState} from "react"
const LogicContext = React.createContext()

function LogicContextProvider(props) {

    return(

        <LogicContext.Provider value={`hello world`}>
            {props.children}
        </LogicContext.Provider>

    )
}

export {LogicContextProvider, LogicContext}

