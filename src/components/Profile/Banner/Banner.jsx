import React from 'react'
import s from './Banner.module.css'

const Banner = () => {
    return (
        <div className={s.banner}>
            <img className={s.banner_img} src="http://rylik.ru/uploads/posts/2011-08/1312148713_14.jpg" />
        </div>
    )
}

export default Banner