import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import './EventsCard.css';
import eventPic from './images/event-pic.png';

export default function EventsCard() {

    return (
        <section className="events-card">
            <h1> Your events </h1>
            <span> and dates </span>
            <EventsList />
        </section>
    )
}

function EventsList() {
    const eventsList = [
        {
            activityImage: eventPic,
            activityName: "Bob's wedding",
        },
        {
            activityImage: eventPic,
            activityName: "Family meeting",
        }
    ]

    return (
        <ul className="events-list_wrapper">
            {eventsList && (
                eventsList.map(event => (
                    <li> <img src={event.activityImage} /> {event.activityName} </li>
                ))
            )}
            {eventsList.length > 2 && 
                <li> + {eventsList.length - 2} more goal </li>
            }
        </ul>
    )
}