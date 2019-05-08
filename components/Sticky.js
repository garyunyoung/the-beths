import React from "react";
import scss from "../styles/Sticky.scss";

export default function Sticky(props) {
  return (
    <div className="sticky">
      {props.children} <style jsx>{scss}</style>
    </div>
  );
}
