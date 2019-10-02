import React from 'react'
import s from './ProfileBtn.module.css'

const ProfileButton = () => {
    return (
        <div className={s.button_wrap}>
            <button><span>Настройки профиля</span></button>
            <button><span>Мои посты</span></button>
        </div>
    )
}

export default ProfileButton

