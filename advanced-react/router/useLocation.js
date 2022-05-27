import React from "react"
import {Link, useLocation} from "react-router-dom"

import servicesData from "./servicesData"

function ServicesList() {
    const location = useLocation()
    console.log(location)

// {
//     pathname: "/services",
//     search: "?something=hello&blah=goodbye",
//     hash: "",
//     state: null,
//     key: "qyfp8w"
// }
    const services = servicesData.map(service => (
        <div key={service._id}>
            <h3><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        </div>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList
