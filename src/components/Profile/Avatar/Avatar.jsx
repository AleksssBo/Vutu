import React from 'react'
import s from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={s.ava}>
            <div className={s.ava_block}></div>
            <img src="https://image.flaticon.com/icons/svg/145/145847.svg" alt="" />
        </div>
    )
}

export default Avatar