import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <img src="https://image.flaticon.com/icons/svg/145/145847.svg" alt="" />
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