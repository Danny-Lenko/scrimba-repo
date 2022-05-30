import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Switch, Route} from "react-router-dom"

function App() {
    const [startingPage, setStartingPage] = React.useState(true)

    function handleHeaderClicks() {
        setStartingPage(false)
    }

    return (
        <div>
            <Header handleHeaderClicks={handleHeaderClicks} />
            <Switch>
                {
                    startingPage
                        ? <h1>Home Page</h1>
                        : <Route exact path="/"><Photos/></Route>
                }

                <Route path="/cart"><Cart/></Route>
            </Switch>
        </div>
    )
}

export default App

