import React from "react";
import scss from "../styles/_sticky.scss";

export default function Sticky(props) {
  return (
    <div className="sticky">
      {props.children} <style jsx>{scss}</style>
    </div>
  );
}
