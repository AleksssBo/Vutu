const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-TEXT-POST'
const UPDATE_POST_THEME = 'UPDATE-THEME-POST'

let initialState = {

    myPosts: [
        {
            id: 1,
            theme: "Как мои дела?",
            content: "Хей! Мои дела прекрасны, сегодня я купила себе новый телефон!",
            likeCount: 12
        },
        {
            id: 2,
            theme: "Отдыхаю...",
            content: "Сегодня я с семьез поехала в горы где провела круто время.",
            likeCount: 8
        },
        {
            id: 3,
            theme: "Новый день!",
            content: "Доброе утро, настал новый день. Вперед к свершениям!",
            likeCount: 325
        }
    ],

    friendsOnline: [
        {id: 1, name: "Богдан", gen: "m"},
        {id: 2, name: "Саша", gen: "w"},
        {id: 3, name: "Эмилия", gen: "w"},
        {id: 4, name: "Никита", gen: "m"},
        {id: 5, name: "Ксюша", gen: "w"}
    ],


    postNewTheme: "theme",

    postNewText: "text"


}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let post = {
                id: 5,
                theme: state.postNewTheme,
                content: state.postNewText,
                likeCount: 0
            }

            state.postNewText = ''
            state.postNewTheme = ''
            state.myPosts.push(post)
            return state

        case UPDATE_POST_THEME:
            state.postNewTheme = action.theme
            return state

        case UPDATE_POST_TEXT:
            state.postNewText = action.text
            return state

        default:
            return state

    }



}

export default profileReducer
export const updateThemePostActionCreator = (theme) => ({type: UPDATE_POST_THEME, theme: theme})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextPostActionCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})
