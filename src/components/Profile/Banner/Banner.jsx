import React from 'react'
import s from './Banner.module.css'

const Banner = () => {
    return (
        <div className={s.banner}>
            <img className={s.banner_img} src="https://www.petrozavodsk-travel.ru/wp-content/uploads/2016/09/1-9.jpg" />
        </div>
    )
}

export default Banner