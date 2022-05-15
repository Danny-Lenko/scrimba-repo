
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function (number) {
                    return (
                        <h1>{number > 17 ? `You are allowed` : `Wait for ${18 - number} years`}</h1>
                    )
                }
            }/>
        </div>
    )
}

export default App

import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(18)}
        </div>
    )
}

export default Example
