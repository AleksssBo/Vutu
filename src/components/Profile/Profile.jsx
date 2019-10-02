import React from 'react'
import s from './Profile.module.css'
import Avatar from './Avatar/Avatar'
import Banner from './Banner/Banner'
import ProfileAside from './Profile_aside/ProfileAside'
import ProfileInfo from './Profile_info/ProfileInfo'
import ProfileButton from '../Buttons/ProfileBtn/ProfileBtn'
import MyPosts from './Posts/Posts'

const Profile = () => {
    return (
        <main>
            <div className={s.profile}>

                <Banner />
                <Avatar />
                <ProfileInfo />
                <ProfileButton />

            </div>

            <ProfileAside />

            <MyPosts />
        </main>
    )
}


export default Profile

