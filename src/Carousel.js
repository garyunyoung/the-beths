import React from "react";
import "./Carousel.css";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: "1"
    };
  }

  handleClick() {}

  render() {
    return (
      <div
        className={`carousel ${
          this.props.modifier ? `carousel--${this.props.modifier}` : ""
        }`}
      >
        <div
          className="carousel__wrapper"
          onClick={() => {
            this.handleClick();
          }}
        >
          {this.props.images.map(image => (
            <CarouselImage src={image} />
          ))}
        </div>
      </div>
    );
  }
}

function CarouselImage(props) {
  return (
    <div
      className="carousel__image carousel__image--small"
      style={{ backgroundImage: `url(${props.src})` }}
    />
  );
}
