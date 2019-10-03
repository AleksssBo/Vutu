import React from 'react'
import s from './Posts.module.css'
import AddPost from './AddPosts/AddPost'
import AllPost from './AllPosts/AllPost'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            
            <AddPost />


            <AllPost />

        </div>
    )
}

export default MyPosts