import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main>
            <div className={ s.banner }>
                <img src="https://www.petrozavodsk-travel.ru/wp-content/uploads/2016/09/1-9.jpg" />
            </div>

            <div className={ s.profile_info }>
                ava + discription
        </div>

            <div className={ s.posts }>
                add new posts
        </div>

            <div className={ s.my_posts }>
                All adding posts
        </div>
        </main>
    )
}


export default Profile

