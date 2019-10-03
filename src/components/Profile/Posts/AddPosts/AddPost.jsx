import React from 'react'
import s from './AddPost.module.css'
import Button from '../../../Buttons/Button'

const AddPost = () => {
    return (
        <div className={s.add_posts}>
            <span className={s.add_post}>Добавить новость:</span>
            <input type="text" placeholder="Тема новости" />
            <textarea placeholder="Ваши новости..." />
            <Button name="Опубликовать"  />
        </div>
    )
}

export default AddPost