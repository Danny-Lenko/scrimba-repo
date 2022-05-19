import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
    state = {
        name: "bob123"
    }

    changeName = (name) => {
        this.setState({name: name})
    }

    render() {
        return(
            <Provider value={{
                name: this.state.name,
                changeName: this.changeName
            }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {UserContextProvider} from "./userContext"

ReactDOM.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>,
    document.getElementById("root")
)

import React, {Component} from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <UserContextConsumer>
                        {context => (
                            <p className="main">No new notifications, {context.name}! 🎉</p>
                        )}
                    </UserContextConsumer>
                </main>

                <input
                    type="text"
                    name="username"
                    placeholder="New username"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <UserContextConsumer>
                    {context => (
                        <button
                            onClick={() => context.changeName(this.state.value)}
                        >
                            Change Username
                        </button>
                    )}
                </UserContextConsumer>

            </div>
        )
    }

}

export default App

/**
 * Challenge: Add the ability for the user to choose a new username
 *
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 *
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 *
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
 */

import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {context => (
                    <p>Welcome, {context.name}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header


