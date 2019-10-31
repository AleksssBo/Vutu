import React from 'react'
import s from './Profile.module.css'
import Avatar from './Avatar/Avatar'
import Banner from './Banner/Banner'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Button from '../Buttons/Button'
import ProfileAsideContainer from "./ProfileAside/ProfileAsideContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <main>
            <div className={s.profile}>

                <Banner />
                <Avatar />
                <ProfileInfo
                    name="Яна Бондаренко"
                    dateOfBirth="05.12.2003"
                    age="15"
                    city="Кропоткин"
                    contry="Россия"
                    webSite="google.com"/>

                <div className={s.button_wrap}>
                    <Button name="Редактировать"/>
                    <Button name="Мои новости"/>
                </div>

            </div>

            <ProfileAsideContainer store={props.store} />
            <PostsContainer store={props.store}/>
        </main>
    )
}

export default Profile

