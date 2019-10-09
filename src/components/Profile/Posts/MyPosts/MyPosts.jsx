import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.all_posts}>
            <h2 className={s.news_title}>Мои новости</h2>

            <Post theme="Как мои дела?" content="Хей! Мои дела прекрасны, сегодня я купила себе новый телефон!"/>
            <Post theme="Отдыхаю..." content="Сегодня я с семьез поехала в горы где провела круто время." />
            <Post theme="Новый день!" content="Доброе утро, настал новый день. Вперед к свершениям!" />
            <Post theme="Боль и страдания" content="Я страдаю, это больно"></Post>
        </div>
    )
}

export default MyPosts