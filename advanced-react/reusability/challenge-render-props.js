
import React from "react"
import DataFetcher from "./DataFetcher"

function App() {
    return (
        <div>
            <DataFetcher
                url="https://swapi.dev/api/people/1/"
                render={({loading, data}) => (
                    loading
                        ? <h1>Loading...</h1>
                        : <p>{JSON.stringify(data)}</p>
                )
                }
            />

        </div>
    )
}

export default App


import React, {Component} from "react"

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
    }

    render() {
        return (

            <div>
                {this.props.render({
                    loading: this.state.loading,
                    data: this.state.data
                })}
            </div>
        )
    }
}

export default DataFetcher