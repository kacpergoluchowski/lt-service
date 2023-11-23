import React from "react";
import './GoalsCard.css';
import engPic from './images/eng-pic.png'
import licensePic from './images/license-pic.png';

export default function GoalsCard() {
    return (
        <section className="goals-card">
            <h1> Your goals </h1>
            <span> and progress </span>
            <GoalsList />
        </section>
    )
}

function GoalsList() {
    const goalsList = [
        {
            activityImage: engPic,
            activityName: "Learn english B2",
        },
        {
            activityImage: licensePic,
            activityName: "Get a driving license",
        }
    ]

    return (
        <ul className="goals-list_wrapper">
            {goalsList && (
                goalsList.map(goal => (
                    <li> <img src={goal.activityImage} /> {goal.activityName} </li>
                ))
            )}
            {goalsList.length > 2 && 
                <li> + {goalsList.length - 2} more goal </li>
            }
        </ul>
    )
}