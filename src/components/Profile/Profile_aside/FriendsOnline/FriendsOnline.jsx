import React from 'react'
import s from './FriendsOnline.module.css'
import FriendOnline from "./FriendOnline/FriendOnline";

const FriendsOnline = (props) => {

    let friendsOnline = props.Friends.map( friendOnline => <FriendOnline name={friendOnline.name} gen={friendOnline.gen}/>)

    return (
            <div className={s.friends_online}>
                <span>Друзья онлайн:</span>

                <div className={s.friend_online}>
                    { friendsOnline }
                </div>


            </div>
    )
}

export default FriendsOnline