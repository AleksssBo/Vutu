import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.ava}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false" alt="" />
            </div>

            <div className={s.content}>
                <h3 className={s.title}>Добрый день!</h3>

                <span className={s.text}>
                    Хей, как дела?
                </span>
            </div>
        </div>
    )
}

export default Post