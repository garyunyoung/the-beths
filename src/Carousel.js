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
            className="carousel__button carousel__button--left"
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
            <CarouselImage item={this.props.merch[this.state.currentSlide]} />
          </a>
          <p
            className="carousel__button carousel__button--right"
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
    <React.Fragment>
      <div
        className="carousel__image"
        style={{ backgroundImage: `url(${props.item.src})` }}
      />
      <p className="carousel__image--title">{props.item.title}</p>
    </React.Fragment>
  );
}

// Note --
// setState is an async function. React may batch a bunch of setStates together.
// So the value of this.state.count is the value at the time you make the request.
// A better solutions to call a function that gets evaluated at the time the setState gets executed.
