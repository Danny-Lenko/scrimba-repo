import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context"

function Photos() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    const context = useContext(Context)
    console.log(context)

    const allPhotos = context.allPhotos.map((photo, i) => (
        <Image
            key={photo.id}
            img={photo}
            className={getClass(i)}
        />
    ))

    return (
        <main className="photos">
            <h1>Images go here</h1>
            {allPhotos}
        </main>
    )
}

export default Photos

