import React from 'react'
import s from './AllPost.module.css'
import Post from './Post/Post'

const AllPost = () => {
    return (
        <div className={s.all_posts}>
            <h2 className={s.news_title}>Мои новости</h2>

            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default AllPost