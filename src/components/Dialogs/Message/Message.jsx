import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) => {

    let ava = props.img

    if(props.img == "" || props.img == null) {
        if(props.gen == "w") ava = "https://image.flaticon.com/icons/svg/145/145847.svg"
        else ava = "https://image.flaticon.com/icons/svg/145/145849.svg"
    }

    return (
        <div className={s.message_wrap} value={props.who}>
            <img src={ava} alt=""/>

            <div className={s.message}>
                <div className={s.text}>{props.msg}</div>
                <div className={s.time}></div>
            </div>

            <img src={ava} alt=""/>
        </div>
    )
}


export default Message