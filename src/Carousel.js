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
              this.handleClick(1);
            }}
          >{`<`}</p>
          <a
            className="carousel__wrapper--link"
            href="https://thebethsnz.bandcamp.com/merch"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.merch.map((item, i) => (
              <CarouselImage
                item={item}
                key={i}
                visible={i === this.state.currentSlide}
              />
            ))}
          </a>
          <p
            className="carousel__button"
            onClick={() => {
              this.handleClick(-1);
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
      <div
        className="carousel-image__image"
        style={{ backgroundImage: `url(${props.item.src})` }}
      />
      <p className="carousel-image--title">{props.item.title}</p>
    </div>
  );
}
