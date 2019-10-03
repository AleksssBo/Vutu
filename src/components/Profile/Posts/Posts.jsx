import React from 'react'
import s from './Posts.module.css'
import AddPost from './AddPosts/AddPost'
import MyPosts from './MyPosts/MyPosts'

const Posts = () => {
    return (
        <div className={s.posts}>
            
            <AddPost />
            <MyPosts />

        </div>
    )
}

export default Posts