import React from "react";
import "./Header.css";

export default function Header(props) {
    return (
    <React.Fragment>
        <h1 className="heading heading--link"><a name={props.heading}>{props.heading}</a></h1>
        <h1 className="heading">{props.heading}</h1>
    </React.Fragment>
    )
}