import React from "react";
import "./Carousel.css";

export default function Carousel(props) {
  return (
    <div
      className={`carousel ${
        props.modifier ? `carousel--${props.modifier}` : ""
      }`}
    >
      <div className="carousel__wrapper">
        {props.photos.map((photo) => <div className="carousel__image" style={{backgroundImage: `url(${photo})`}}/>)}
      </div>
    </div>
  );
}
