import React from 'react'
import s from './Dialogs.module.css'
import Button from "../Buttons/Button";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let msg = React.createRef()

    let sendMsg = () => {
        props.sendMsg(msg.current.value)
        msg.current.value = ''
    }

    let updateMsgText = () => {
        props.updateMsgtext(msg.current.value)
    }

    let dialogElements = props.dialogs.map(item => <Dialog name={item.name} id={item.id} gen={item.gen}/>)
    let msgElements = props.messages.map(item => <Message id={item.id} who={item.who} msg={item.msg} gen={item.gen}/>)

    return (
       <main>
            <div className={s.dialogs}>

                <div>{dialogElements}</div>

                <div className={s.messages} value="inter">

                    <div className={s.scroll}>{msgElements}</div>

                    <div className={s.field} >
                        <textarea placeholder="Напишите сообщение..."
                                  ref={ msg }
                                  onChange={ updateMsgText }
                                  value={props.msgText}  />

                        <Button name="Отправить" fn={ sendMsg }/>
                    </div>

                </div>
            </div>
       </main>
    )
}

export default Dialogs
