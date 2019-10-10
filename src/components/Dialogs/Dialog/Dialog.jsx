import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let ava = props.img
    let path = "/dialogs/id" + props.id

    if(props.img == "" || props.img == null) {
        if(props.gen == "w") ava = "https://image.flaticon.com/icons/svg/145/145847.svg"
        else ava = "https://image.flaticon.com/icons/svg/145/145849.svg"
    }

    return (
        <div className={s.dialog}>
            <NavLink to={path}>
                <div className={s.ava}>
                    <img src={ava} />
                </div>
                <h3 className={s.name}>{props.name}</h3>
            </NavLink>
        </div>
    )
}



export default Dialog