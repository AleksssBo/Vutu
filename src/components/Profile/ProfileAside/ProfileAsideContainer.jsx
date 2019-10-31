import React from 'react'
import ProfileAside from "./ProfileAside";

const ProfileAsideContainer = (props) => {
    let state = props.store.getState()

    return (<ProfileAside friends={state.profilePage.friendsOnline}/>)
}

export default ProfileAsideContainer
