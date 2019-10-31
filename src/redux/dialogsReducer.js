const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {

    dialogs: [
        {id: 1, name: "Викулин Богдан", gen: "m"},
        {id: 2, name: "Саша Протасова", gen: "w"},
        {id: 3, name: "Никита Бондаренко", gen: "m"},
        {id: 4, name: "Эмилия Бондаренко", gen: "w"}
    ],

    messages: [
        {id: 1, msg: "Привет!", who: "Богдан", gen: "m"},
        {id: 2, msg: "Приветик, что делаешь?", who: "Я", gen: "w"},
        {id: 3, msg: "Учу React.js. А ты?", who: "Богдан", gen: "m"},
        {id: 4, msg: "Делаю уроки, как твои дела?", who: "Я", gen: "w"},
        {id: 6, msg: "Ладненько мне пора идти)", who: "Я", gen: "w"},
        {id: 7, msg: "Давай))", who: "Богдан", gen: "m"}
    ],

    messageText: "Hi!"
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.text
            return state

        case SEND_MESSAGE:
            let message = {
                id: state.messages.length + 2,
                msg: state.messageText,
                who: "Я",
                gen: "w"
            }

            state.messageText = ''
            state.messages.push(message)
            return state

        default:
            return state
    }

}

export default dialogsReducer
export const addMsgActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageActionCreator = (msgText) => ({type: UPDATE_MESSAGE_TEXT, text: msgText})
