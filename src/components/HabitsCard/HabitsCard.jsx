import React from "react";
import './HabitsCard.css';
import readingPic from './images/book-pic.png';
import salaryPic from './images/salary-pic.png';
import penPic from './images/pen-pic.png';

export default function HabitsCard() {
    return (
        <section className="habits-card">
            <div className="edit-message"> Edit Habits <img src = {penPic} /> </div>
            <h1> Your habits </h1>
            <span> and progress </span>
            <HabitsList />
        </section>
    )
}

function HabitsList() {
    const habitsList = [
        {
            activityImage: readingPic,
            activityName: "Reading book",
        },
        {
            activityImage: salaryPic,
            activityName: "Save money",
        },
        {
            activityImage: salaryPic,
            activityName: "Save money",
        },
        {
            activityImage: salaryPic,
            activityName: "Save money",
        },
        {
            activityImage: salaryPic,
            activityName: "Save money",
        },
        {
            activityImage: salaryPic,
            activityName: "Save money",
        }
        
    ]

    return (
        <ul className="habits-list_wrapper">
            {habitsList && (
                habitsList.map(habit => (
                    <li> <img src={habit.activityImage} /> {habit.activityName} </li>
                ))
            )}  
        </ul>
    )
}
