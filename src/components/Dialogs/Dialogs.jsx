import React from 'react'
import s from './Dialogs.module.css'
import Button from "../Buttons/Button";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let dialogElements = props.state.dialogs.map(item => <Dialog name={item.name} id={item.id} gen={item.gen}/>)
    let msgElements = props.state.messages.map(item => <Message id={item.id} who={item.who} msg={item.msg} gen={item.gen}/>)

    return (
       <main>
            <div className={s.dialogs}>

                <div className={s.dialog_items}>
                    { dialogElements }
                </div>

                <div className={s.messages} value="inter">

                    <div className={s.scroll}>
                        { msgElements }
                    </div>

                    <div className={s.field}>
                        <textarea placeholder="Напишите сообщение..."></textarea>
                        <Button name="Отправить"/>
                    </div>

                </div>
            </div>
       </main>
    )
}

export default Dialogs