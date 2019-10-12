import {renderApp} from "../render";

let state  = {

    profilePage: {

        myPosts: [
            {id: 1, theme: "Как мои дела?", content: "Хей! Мои дела прекрасны, сегодня я купила себе новый телефон!", likeCount: 12},
            {id: 2, theme: "Отдыхаю...", content: "Сегодня я с семьез поехала в горы где провела круто время.", likeCount: 8},
            {id: 3, theme: "Новый день!", content: "Доброе утро, настал новый день. Вперед к свершениям!", likeCount: 325},
            {id: 4, theme: "Боль и страдания", content: " страдаю, это больно", likeCount: 666},
        ],

        friendsOnline: [
            {id: 1, name: "Богдан", gen: "m"},
            {id: 2, name: "Саша", gen: "w"},
            {id: 3, name: "Эмилия", gen: "w"},
            {id: 4, name: "Никита", gen: "m"},
            {id: 5, name: "Ксюша", gen: "w"}
        ],


        postNewTheme: "",

        postNewText: ""


    },

    dialogsPage: {

        dialogs: [
            {id: 1, name: "Викулин Богдан", gen: "m"},
            {id: 2, name: "Саша Протасова", gen: "w"},
            {id: 3, name: "Никита Бондаренко", gen: "m"},
            {id: 4, name: "Эмилия Бондаренко", gen: "w"}
        ],

        messages: [
            {id: 1, msg: "Привет!", who: "Богдан", gen: "m" },
            {id: 2, msg: "Приветик, что делаешь?", who: "Я", gen: "w" },
            {id: 3, msg: "Учу React.js. А ты?", who: "Богдан", gen: "m" },
            {id: 4, msg: "Делаю уроки, как твои дела?", who: "Я", gen: "w" },
            {id: 6, msg: "Ладненько мне пора идти)", who: "Я", gen: "w" },
            {id: 7, msg: "Давай))", who: "Богдан", gen: "m" }
        ]
    }

}

export let addPost = () => {

    let post = {
        id: 5,
        theme: state.profilePage.postNewTheme,
        content: state.profilePage.postNewText,
        likeCount: 0
    }

    state.profilePage.postNewText = ''
    state.profilePage.postNewTheme = ''

    state.profilePage.myPosts.push(post)
    renderApp(state)
}

export let updateTextPost = (text) => {
    debugger;

    state.profilePage.postNewText = text
    renderApp(state)
}

export let updateThemePost = (theme) => {
    state.profilePage.postNewTheme = theme
    renderApp(state)
}



export default state