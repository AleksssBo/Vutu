import React from 'react'
import s from './Aside.module.css'

const Aside = () => {
    return (
        <aside className="aside">
            <div>
                <div className={ s.nav_item }><a>Profile</a><img src="https://image.flaticon.com/icons/svg/1301/1301344.svg" /></div>
                <div className={ s.nav_item }><a>Messages</a><img src="https://image.flaticon.com/icons/svg/1301/1301360.svg" /></div>
                <div className={ s.nav_item }><a>News</a><img src="https://image.flaticon.com/icons/svg/1301/1301346.svg" /></div>
                <div className={ s.nav_item }><a>Music</a><img src="https://image.flaticon.com/icons/svg/416/416358.svg" /></div>
            </div>

            <div className="{ s.nav_item }"><a>Settings</a><img src="https://image.flaticon.com/icons/svg/1301/1301357.svg" /></div>
        </aside>
    )
}



export default Aside