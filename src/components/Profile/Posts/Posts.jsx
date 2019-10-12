import React from 'react'
import s from './Posts.module.css'
import AddPost from './AddPosts/AddPost'
import MyPosts from './MyPosts/MyPosts'

const Posts = (props) => {
    return (
        <div className={s.posts}>
            
            <AddPost addPost={ props.addPost }
                     newText={ props.newText }
                     newTheme={ props.newTheme }
                     updateText={ props.updateText }
                     updateTheme={ props.updateTheme }/>

            <MyPosts Posts={props.posts}/>

        </div>
    )
}

export default Posts