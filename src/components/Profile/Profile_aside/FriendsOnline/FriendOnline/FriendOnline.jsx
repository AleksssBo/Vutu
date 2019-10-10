import React from 'react'
import s from './../FriendsOnline.module.css'

const FriendOnline = (props) => {
    let ava = props.img

    if(props.img == "" || props.img == null) {
        if(props.gen == "w") ava = "https://image.flaticon.com/icons/svg/145/145847.svg"
        else ava = "https://image.flaticon.com/icons/svg/145/145849.svg"
    }

    return (
        <div className={ s.friend }>
            <div className={s.friend_ava}>
                <img src={ ava } alt="" />
            </div>

            <div className={s.name}> { props.name } </div>
        </div>
    )
}

export default FriendOnline