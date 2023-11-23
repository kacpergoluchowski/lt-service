import React from "react";
import '../index.css';
import Aside from "../layouts/Aside/Aside";
import Main from "../layouts/Main/Main";

export default function Home() {
    return (
        <div className="page-wrapper">
            <Aside />
            <Main />
        </div>
    )
}