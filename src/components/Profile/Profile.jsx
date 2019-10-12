import React from 'react'
import s from './Profile.module.css'
import Avatar from './Avatar/Avatar'
import Banner from './Banner/Banner'
import ProfileAside from './ProfileAside/ProfileAside'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import Button from '../Buttons/Button'

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
                    webSite="google.com"
                />

                <div className={s.button_wrap}>
                    <Button name="Редактировать"/>
                    <Button name="Мои новости"/>
                </div>

            </div>

            <ProfileAside friendsOnline={props.state.friendsOnline} />

            <Posts posts={props.state.myPosts}
                   addPost={ props.addPost }
                   newText={props.state.postNewText}
                   newTheme={props.state.postNewTheme}
                   updateText={ props.updateText }
                   updateTheme={ props.updateTheme }/>
        </main>
    )
}

export default Profile

