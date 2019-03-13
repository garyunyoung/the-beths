import React from "react";
import "./Nav.css";
import logoBlack from "./images/logo-b.jpg";


export default function Nav() {
    return (
        <div className="nav">
            <img className="nav__logo" src={logoBlack}/>
            <p className="nav__burger" >=</p>
        </div>
    )
}