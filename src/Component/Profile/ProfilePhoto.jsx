import React from 'react'
import '/src/App.css'

function ProfilePhoto(props) {
    return (
        <div>
            <img src={props.image} alt="" />
        </div>
    )
}

export default ProfilePhoto
