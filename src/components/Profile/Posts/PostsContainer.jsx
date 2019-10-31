import React from 'react'
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState()

    return (<Posts state={state} store={props.store}/>)
}

export default PostsContainer
