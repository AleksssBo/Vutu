import React from 'react'
import s from './Posts.module.css'

const MyPosts = () => {
    return (
        <div className={s.posts}>

            <div className={s.add_posts}>
                <span className={s.add_post}>Добавить новость:</span>
                <input placeholder="Тема новости" />
                <textarea placeholder="Ваши новости..." />
                <button className={s.submit}><span>Опубликовать</span></button>
            </div>


            <div className={s.all_posts}>
                <h2 className={s.news_title}>Мои новости</h2>

                <div className={s.post}>
                    <div className={s.ava}>
                        <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt="" />
                    </div>

                    <div className={s.content}>
                        <span className={s.title}>Дело всей жизни!</span>

                        <span className={s.text}>
                            Сегодня мне прилось выбирать между двух дел сразу, одно которое мне нравится... 
                            Другое я терпеть не могу, но все говорят что так лучше... 
                            И я подумал что если это дело всей моей жизни, то я виберу то которое мне нравится.
                            Ибо это дело я смогу делать качественно!
                        </span>
                    </div>
                </div>

                <div className={s.post}>
                    <div className={s.ava}>
                        <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt="" />
                    </div>

                    <div className={s.content}>
                        <h3 className={s.title}>Дело всей жизни!</h3>

                        <span className={s.text}>
                            Сегодня мне прилось выбирать между двух дел сразу, одно которое мне нравится... 
                            Другое я терпеть не могу, но все говорят что так лучше... 
                            И я подумал что если это дело всей моей жизни, то я виберу то которое мне нравится.
                            Ибо это дело я смогу делать качественно!
                        </span>
                    </div>
                </div>

                <div className={s.post}>
                    <div className={s.ava}>
                        <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt="" />
                    </div>

                    <div className={s.content}>
                        <span className={s.title}>Дело всей жизни!</span>

                        <span className={s.text}>
                            Сегодня мне прилось выбирать между двух дел сразу, одно которое мне нравится... 
                            Другое я терпеть не могу, но все говорят что так лучше... 
                            И я подумал что если это дело всей моей жизни, то я виберу то которое мне нравится.
                            Ибо это дело я смогу делать качественно!
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyPosts