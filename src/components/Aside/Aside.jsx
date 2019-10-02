import React from 'react'
import s from './Aside.module.css'

const Aside = () => {
    return (
        <aside className="aside">
            <div>
                <div className={ s.nav_item }><a>Профиль</a><img src="https://image.flaticon.com/icons/svg/1301/1301344.svg" /></div>
                <div className={ s.nav_item }><a>Сообщения</a><img src="https://image.flaticon.com/icons/svg/1301/1301360.svg" /></div>
                <div className={ s.nav_item }><a>Новости</a><img src="https://image.flaticon.com/icons/svg/1301/1301346.svg" /></div>
                <div className={ s.nav_item }><a>Музыка</a><img src="https://image.flaticon.com/icons/svg/416/416358.svg" /></div>
                <div className={ s.nav_item }><a>Друзья</a><img src="https://image.flaticon.com/icons/svg/1049/1049869.svg" /></div>
            </div>

            <div className={ s.nav_item }><a>Настройки</a><img src="https://image.flaticon.com/icons/svg/1301/1301357.svg" /></div>
        </aside>
    )
}


export default Aside