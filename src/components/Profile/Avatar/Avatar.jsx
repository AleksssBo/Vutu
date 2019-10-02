import React from 'react'
import s from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={s.ava}>
            <div className={s.ava_block}></div>
            <img src="https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200" alt="" />
        </div>
    )
}

export default Avatar