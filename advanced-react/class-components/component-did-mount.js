
import React from "react"

export default class App extends React.Component {
    state = {
        character: {}
    }

    /**
     * Challenge:
     *
     * Save the Star Wars character object in state! Then,
     * display the `name` property of the character on the
     * screen.
     */

    componentDidMount() {
        console.log("componentDidMount")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                this.setState({character: data})
            })
    }

    // React.useEffect(() => {
    //     // Your code here
    // }, [])

    render() {
        console.log("render")
        return (
            <h1>{this.state.character.name}</h1>
        )
    }
}

