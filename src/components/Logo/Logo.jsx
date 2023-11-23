import React from "react";
import './Logo.css';
import logoPic from './assets/images/logo-pic.png'

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <img src = {logoPic} />
            <h1> LifeTracker </h1>
            
        </div>
    )
}