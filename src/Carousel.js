import React from "react";
import "./Carousel.scss";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  handleClick(indexChange) {
    this.setState((prevState, props) => {
      const newIndex = prevState.currentSlide + indexChange;
      return {
        currentSlide: (newIndex + props.merch.length) % props.merch.length
      };
    });
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel__wrapper">
          <p
            className="carousel__button"
            onClick={() => {
              this.handleClick(-1);
            }}
          >{`<`}</p>
          {this.props.merch.map((item, i) => (
            <CarouselImage
              item={item}
              key={i}
              visible={i === this.state.currentSlide}
            />
          ))}
          <p
            className="carousel__button"
            onClick={() => {
              this.handleClick(1);
            }}
          >{`>`}</p>
        </div>
      </div>
    );
  }
}

function CarouselImage(props) {
  return (
    <div
      className={`carousel-image ${
        props.visible ? "carousel-image--visible" : ""
      }`}
    >
      <a
        className="carousel__wrapper--link"
        href={props.item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="carousel-image__image"
          alt={`merch: ${props.item.title}`}
          style={{ backgroundImage: `url(${props.item.src})` }}
        />
        <p className="carousel-image--title">{props.item.title}</p>
      </a>
    </div>
  );
}
