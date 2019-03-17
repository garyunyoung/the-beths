import React from "react";
import "./Sticky.scss";

export default function Sticky(props) {
    return <div className="sticky">{props.children}</div>
}