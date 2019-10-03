import React from 'react'
import s from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={s.add_posts}>
            <span className={s.add_post}>Добавить новость:</span>
            <input type="text" placeholder="Тема новости" />
            <textarea placeholder="Ваши новости..." />
            <button className={s.submit}><span>Опубликовать</span></button>
        </div>
    )
}

export default AddPost