import React from "react";
import './Header.css';
import bellPic from './images/bell-pic.png';
import userPic from './images/user-pic.png';
import morePic from './images/more-pic.png';

export default function Header() {
    
    return (
        <header className="header-wrapper">
            <h1> Dashboard </h1>
            <input type = 'text' placeholder = 'Search' /> 
            <Profile />
        </header>
    )
}

function Profile() {
    return (
        <div className="profile-wrapper">
            <img src = {userPic} />
            <div className="user-data-wrapper">
                <span> Guest </span>
                <span className="user-role"> No-role </span>
            </div>
            <img src = {morePic} />
        </div>
    )
}