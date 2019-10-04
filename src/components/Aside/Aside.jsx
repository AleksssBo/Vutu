import React from 'react'
import s from './Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className="aside">
            <div className={s.nav_item}><NavLink to="/profile">Профиль</NavLink><img src="https://image.flaticon.com/icons/svg/1301/1301344.svg" /></div>
            <div className={s.nav_item}><NavLink to="/dialogs">Сообщения</NavLink><img src="https://image.flaticon.com/icons/svg/1301/1301360.svg" /></div>
            <div className={s.nav_item}><NavLink to="/news">Новости</NavLink><img src="https://image.flaticon.com/icons/svg/1301/1301346.svg" /></div>
            <div className={s.nav_item}><NavLink to="/music">Музыка</NavLink><img src="https://image.flaticon.com/icons/svg/416/416358.svg" /></div>
            <div className={s.nav_item}><NavLink to="/friends">Друзья</NavLink><img src="https://image.flaticon.com/icons/svg/1049/1049869.svg" /></div>
            <div className={s.nav_item}><NavLink to="/settings">Настройки</NavLink><img src="https://image.flaticon.com/icons/svg/1301/1301357.svg" /></div>
        </aside>
    )
}


export default Aside