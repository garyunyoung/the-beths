import React from "react";
import "./Carousel.css";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  handleClick() {
    this.setState((prevState, props) => {
      if (prevState.currentSlide < props.merch.length - 1) {
        return {
          currentSlide: prevState.currentSlide + 1
        };
      } else {
        return {
          currentSlide: 0
        };
      }
    });
  }

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
          <CarouselImage item={this.props.merch[this.state.currentSlide]} />
        </div>
        <p
          className="button--right"
          onClick={() => {
            this.handleClick();
          }}
        >{`>`}</p>
      </div>
    );
  }
}

function CarouselImage(props) {
  return (
    <React.Fragment>
    <div
      className="carousel__image carousel__image--small"
      style={{ backgroundImage: `url(${props.item.src})` }}
    >
    </div>
      <p className="carousel__image__title">{props.item.title}</p>
    </React.Fragment>
  );
}

// Note --
// setState is an async function. React may batch a bunch of setStates together.
// So the value of this.state.count is the value at the time you make the request.
// A better solutions to call a function that gets evaluated at the time the setState gets executed.
