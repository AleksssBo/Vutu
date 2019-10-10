import React from 'react'
import s from './Banner.module.css'

const Banner = () => {
    return (
        <div className={s.banner}>
            <img className={s.banner_img} src="https://i.artfile.me/wallpaper/04-06-2015/2880x1800/risovannoe-abstrakciya-oblaka-fon-backgr-938146.jpg" />
        </div>
    )
}

export default Banner