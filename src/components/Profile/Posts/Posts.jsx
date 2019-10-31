import React from 'react'
import s from './Posts.module.css'
import AddPostContainer from "./AddPosts/AddPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Posts = (props) => {
    return (
        <div className={s.posts}>

            <AddPostContainer state={props.state} store={props.store}/>
            <MyPostsContainer state={props.state}/>

        </div>
    )
}

export default Posts
