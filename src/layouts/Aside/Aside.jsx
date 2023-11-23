import React from "react";
import Logo from "../../components/Logo/Logo";
import './Aside.css';
import Menu from "../../components/Menu/Menu";

export default function Aside() {
    return (
        <aside className="aside-wrapper">
            <Logo />
            <Menu />
        </aside>
    )
}