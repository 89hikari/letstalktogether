import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updatePostText} from '../../redux/state'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts myposts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updatePostText={props.updatePostText}/>
        </div>
    );
}

export default Profile;