import React from "react";
import scss from "../styles/Carousel.scss";

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
          <a
            className="carousel__button"
            onClick={() => {
              this.handleClick(-1);
            }}
          >{`<`}</a>
          {this.props.merch.map((item, i) => (
            <CarouselImage
              item={item}
              key={i}
              visible={i === this.state.currentSlide}
            />
          ))}
          <a
            className="carousel__button"
            onClick={() => {
              this.handleClick(1);
            }}
          >{`>`}</a>
        </div>
        <style jsx>{scss}</style>
      </div>
    );
  }
}

function CarouselImage(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
