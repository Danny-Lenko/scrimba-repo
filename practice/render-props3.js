
import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"

function App() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}

export default App

import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.on, this.toggle)}
            </div>
        )
    }
}

export default Toggler

import React from "react"
import Toggler from "./Toggler"
// bring in the Toggler component
// render the Toggler inside the Menu, and use the render prop to determine what will get displayed
// remember to bring in the "goodies" (state and methods) to that function so you can make this work

function Menu(props) {
    return (

        <Toggler defaultOnValue={true} render={
            (on, toggle) => (
                <div>
                    <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
                    <nav style={{display: on ? "block" : "none"}}>
                        <h6>Signed in as Coder123</h6>
                        <p><a>Your Profile</a></p>
                        <p><a>Your Repositories</a></p>
                        <p><a>Your Stars</a></p>
                        <p><a>Your Gists</a></p>
                    </nav>
                </div>
            )
        } />

    )
}

export default Menu

import React, {Component} from "react"
import Toggler from "./Toggler"

function Favorite(props) {
    return (
        <Toggler render={
            (on, toggle) => (
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span
                            onClick={toggle}
                        >
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>
            )
        }/>
    )
}

export default Favorite

