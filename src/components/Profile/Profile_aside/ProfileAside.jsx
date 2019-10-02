import React from 'react'
import s from './ProfileAside.module.css'

const ProfileAside = () => {
    return (
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
    )
}

export default ProfileAside