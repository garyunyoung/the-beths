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
        {props.images.map(image => (
          <CarouselImage src={image} />
        ))}
      </div>
      
      <div className="carousel--small">
        {props.images.map(image => (
          <CarouselImage src={image} />
        ))}
      </div>
    </div>
  );
}

function CarouselImage(props) {
  return (
    <div
      className="carousel__image carousel__image--small"
      style={{ backgroundImage: `url(${props.src})` }}
    />
  );
}
