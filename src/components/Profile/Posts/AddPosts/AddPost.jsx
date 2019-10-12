import React from 'react'
import s from './AddPost.module.css'
import Button from '../../../Buttons/Button'
import {renderApp} from "../../../../render";

const AddPost = (props) => {

    let themePost = React.createRef();
    let textPost = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let changeTextPost = () => {
        let text = textPost.current.value
        props.updateText(text)
    }

    let changeThemePost = () => {
        let theme = themePost.current.value
        props.updateTheme(theme)
    }


    return (
        <div className={s.add_posts}>
            <span className={s.add_post}>Добавить новость:</span>
            <input type="text"
                   placeholder="Тема новости"
                   ref={ themePost }
                   value={ props.newTheme }
                   onChange={ changeThemePost }/>

            <textarea placeholder="Ваши новости..."
                      ref={ textPost }
                      value={ props.newText }
                      onChange={changeTextPost}/>


            <Button name="Опубликовать" fn={ addPost }/>
        </div>
    )
}

export default AddPost