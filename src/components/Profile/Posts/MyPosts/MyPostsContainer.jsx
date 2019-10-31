import React from 'react'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    return (<MyPosts posts={props.state.profilePage.myPosts}/>)
}

export default MyPostsContainer
