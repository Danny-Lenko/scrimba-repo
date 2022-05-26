import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"

function App() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default App

