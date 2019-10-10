import React from 'react'
import s from './ProfileAside.module.css'
import FriendsOnline from "./FriendsOnline/FriendsOnline";

const ProfileAside = (props) => {
    return (
        <aside className={s.profile_aside}>
            <FriendsOnline Friends={props.friendsOnline}/>
        </aside>
    )
}

export default ProfileAside