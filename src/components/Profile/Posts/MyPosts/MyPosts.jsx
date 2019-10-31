import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post theme={post.theme} content={post.content} likeCount={post.likeCount} />)

    return (
        <div className={s.all_posts}>

            <h2 className={s.news_title}>Мои новости</h2>

            {postElements.reverse()}

        </div>
    )
}

export default MyPosts
