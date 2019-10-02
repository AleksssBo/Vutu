import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.full_name}>
                <h2>Яна Бондаренко</h2>
            </div>

            <div className={s.info}>
                <div className={s.item}><b>Дата рождения: </b> 05.12.2003 (16 лет)</div>
                <div className={s.item}><b>Город: </b>Кропоткин</div>
                <div className={s.item}><b>Страна: </b>Россия</div>
                <div className={s.item}><b>Сайт: </b> google.com</div>
            </div>
        </div> 
    )
}

export default ProfileInfo