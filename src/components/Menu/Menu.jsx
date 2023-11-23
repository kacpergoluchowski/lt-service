import React from "react";
import './Menu.css';
import dashboardPic from './images/dashboard-pic.png'
import HabitsPic from './images/habits-pic.png'
import GoalsPic from './images/goals-pic.png'
import EventsPic from './images/events-pic.png';
import emailPic from './images/email-pic.png';
import moneyPic from './images/money-pic.png';
import notesPic from './images/notes-pic.png';

export default function Menu() {
    return (
        <div className="menu-wrapper">
            <ul>
                <li> <img src = {dashboardPic}/> Dashboard </li>
                <li> <img src = {HabitsPic}/> Habits </li>
                <li> <img src = {GoalsPic}/> Goals </li>
                <li> <img src = {EventsPic}/> Events </li>
                <li> <img src = {moneyPic}/> Money </li>
                <li> <img src = {notesPic}/> Notes </li>
            </ul>
            <button> <img src = {emailPic} /> NEWS </button>
        </div>
    )
}