import React from 'react'
import {addMsgActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState()
    let action

    let sendMsg = (text) => {
        if (text != '') {
            action = addMsgActionCreator()
            props.store.dispatch(action)
        }
    }

    let updateMsgText = (text) => {
        action = updateMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return (<Dialogs sendMsg={sendMsg}
                     updateMsgtext={updateMsgText}
                     msgText={state.dialogsPage.messageText}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}/>)
}

export default DialogsContainer
