import React from 'react'
import {addPostActionCreator, updateTextPostActionCreator, updateThemePostActionCreator} from "../../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    let changePostText = (text) => {
        let action = updateTextPostActionCreator(text)
        props.store.dispatch(action)
    }

    let changePostTheme = (theme) => {
        let action = updateThemePostActionCreator(theme)
        props.store.dispatch(action)
    }


    return (<AddPost addPost={addPost}
                     changePostText={changePostText}
                     changePostTheme={changePostTheme}
                     newTheme={props.state.profilePage.postNewTheme}
                     newText={props.state.profilePage.postNewText}/>)
}

export default AddPostContainer
