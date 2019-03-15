import React from "react";
import "./Header.css";

export default function Header(props) {
    return <h1 className="heading"><a name={props.heading}>{props.heading}</a></h1>
}