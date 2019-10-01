import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main>
            <div className={s.profile}>
                <div className={s.banner}>
                    <img className={s.banner_img} src="https://www.petrozavodsk-travel.ru/wp-content/uploads/2016/09/1-9.jpg" />
                </div>

                <div className={s.ava}>
                    <div className={s.ava_block}></div>
                    <img src="https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200" alt="" />
                </div>

                <div className={s.profile_info}>
                    <div className={s.full_name}>
                        <h2>Яна Бондаренко</h2>
                    </div>

                    <div className={s.info}>
                        <div className={s.item}><b>Дата рождения: </b> 05.12.2003 (16 лет)</div>
                        <div className={s.item}><b>Город: </b>Кропоткин</div>
                        <div className={s.item}><b>Страна: </b>Россия</div>
                        {/* <div className={s.item}>Job: none</div> */}
                        <div className={s.item}><b>Сайт: </b> google.com</div>
                    </div>
                </div>

                <div className={s.button_wrap}>
                    <button><span>Настройки профиля</span></button>
                    <button><span>Мои посты</span></button>
                </div>
            </div>

            <aside className={s.profile_aside}>
                    <div className={s.friends_online}>
                        <span>Друзья онлайн:</span>

                        <div className={s.friend_online}>
                            <div className={s.friend_ava}>
                                <img src="https://avatars.mds.yandex.net/get-pdb/1366122/361691fe-68dc-481e-8c75-d3a49dfec35e/s1200?webp=false" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://avatars.mds.yandex.net/get-pdb/1572252/173c33b8-3b08-4930-9f41-a677e14d5fd7/s1200?webp=false" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://w-dog.ru/wallpapers/14/3/531077488804089.jpg" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://avatars.mds.yandex.net/get-pdb/1572252/173c33b8-3b08-4930-9f41-a677e14d5fd7/s1200?webp=false" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false" alt="" />
                            </div>

                            <div className={s.friend_ava}>
                                <img src="https://w-dog.ru/wallpapers/14/3/531077488804089.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </aside>

            <div className={s.posts}>
                add new posts
            </div>

            <div className={s.my_posts}>
                All adding posts
            </div>
        </main>
    )
}


export default Profile

