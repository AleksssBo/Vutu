import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <img src="https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200" alt="" />
            </div>

            <div className={s.content}>
                <h3 className={s.title}>{props.theme}</h3>

                <span className={s.text}>
                    {props.content}
                </span>
            </div>
        </div>
    )
}

export default Post