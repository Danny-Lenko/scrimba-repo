import React from "react"

const UserContext = React.createContext()
export default UserContext

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import UserContext from "./userContext"

/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 *
 * Use the static class property `contextType` on any components that need to consume context.
 * https://reactjs.org/docs/context.html
 */

ReactDOM.render(
    <UserContext.Provider value={"sally123"}>
        <App />
    </UserContext.Provider>,
    document.getElementById("root")
)


import React from "react"

import Header from "./Header"
import UserContext from "./userContext"

class App extends React.Component {
    static contextType = UserContext

    render() {
        const username = this.context
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {username}! 🎉</p>
                </main>
            </div>
        )
    }
}

export default App

import React, {Component} from "react"
import UserContext from "./userContext"

class Header extends Component {
    static contextType = UserContext

    render() {
        const username = this.context
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )
    }
}

export default Header


