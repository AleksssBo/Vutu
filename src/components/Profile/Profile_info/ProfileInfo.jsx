import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.profile_info}>
            <div className={s.full_name}>
                <h2>{props.name}</h2>
            </div>

            <div className={s.info}>
                <div className={s.item}><b>Дата рождения: </b> {props.dateOfBirth} ({props.age} лет)</div>
                <div className={s.item}><b>Город: </b>{props.city}</div>
                <div className={s.item}><b>Страна: </b>{props.contry}</div>
                <div className={s.item}><b>Сайт: </b>{props.webSite}</div>
            </div>
        </div> 
    )
}

export default ProfileInfo