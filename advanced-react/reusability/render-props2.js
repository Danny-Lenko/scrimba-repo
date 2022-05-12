
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(userInfo) {
                    return(
                        <div>
                            <h1>{userInfo.name}</h1>
                            <h2>{userInfo.position}</h2>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default App

import React from "react"

function Example(props) {
    // const positive = {
    //     name: 'Positive',
    //     position: 'CEO'
    // }
    return (
        <div>
            {props.render({name: 'Positive', position: 'CEO'})}
        </div>
    )
}

export default Example
