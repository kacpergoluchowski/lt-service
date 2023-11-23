import React from "react";
import './NotsCard.css';
import notesPic from './images/notes-pic.png';

export default function NotsCard() {
    return (
        <section className="nots-card">
            <h1> Your nots </h1>
            <NotesList />
        </section>
    )
}

function NotesList() {
    const notesList = [
        {
            activityName: "shopping list",
        },
        {
            activityName: "to complete",
        },
        
    ]

    return (
        <ul className="notes-list_wrapper">
            {notesList && (
                notesList.map(notes => (
                    <li> <img src={notesPic} /> {notes.activityName} </li>
                ))
            )}
            {notesList.length > 2 && 
                <li> + {notesList.length - 2} more goal </li>
            }
        </ul>
    )
}
