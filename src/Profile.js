import React from 'react';
import './Profile.css';
import Anonymous from './img/anonymous.png';


const Profile = isAnonymous => {
    if(isAnonymous){
        return (
            <div className="anonymous">
                <div className="today_title">
                    무엇을 공유할까요?
                </div>
                <div className="profile-name">
                    티파니
                </div>
                <div className="profile-img-wrap">
                    <img src={Anonymous} alt="profiles" className="profile-img"/>
                </div>
            </div>
        );
    }
    return <div/>;
}


export default Profile;