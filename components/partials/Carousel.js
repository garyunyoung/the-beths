
import React from "react";
import { urlFor } from "../../lib/sanity.js";

import scss from "../../styles/Carousel.scss";

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

function CarouselImage({ visible, item }) {
  const { name, url, thumbnail } = item

  return (
    <React.Fragment>
      <div
        className={`carousel-image ${visible ? "carousel-image--visible" : ""
          }`}
      >
        <a
          className="carousel__wrapper--link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="carousel-image__image"
            alt={`merch: ${name}`}
            style={{ backgroundImage: `url(${urlFor(thumbnail).url()})` }}
          />
          <p className="carousel-image--title">{name}</p>
        </a>
      </div>
    </React.Fragment>
  );
}
