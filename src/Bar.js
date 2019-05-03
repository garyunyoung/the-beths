import React from "react";
import Nav from "./Nav";
import Sticky from "./Sticky";
import "./Bar.scss";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleNav() {
    this.setState((prevState, _props) => ({
      isOpen: !prevState.isOpen
    }));
  }

  activateGame() {
    this.toggleNav();
    this.props.toggleGame();
  }

  render() {
    return (
      <Sticky>
        <nav id="home" className="bar">
          <Logo img={this.props.img} />
          <HamburgerButton
            open={this.state.isOpen}
            toggleNav={() => this.toggleNav()}
          />
        </nav>
        <Nav
          open={this.state.isOpen}
          toggleNav={() => this.toggleNav()}
          toggleGame={() => this.activateGame()}
          img={this.props.img}
        />
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <a className="hamburger__btn" onClick={props.toggleNav}>
      {props.open ? "x" : "="}
    </a>
  );
}

export function Logo(props) {
  return (
    <a className="nav__item" href="#">
      <img
        className={`${props.className} bar__logo cld-responsive`}
        src={`${props.img}logo.png`}
        alt="the beths logo"
      />
    </a>
  );
}
