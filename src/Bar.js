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
    this.toggleNav()
    this.props.toggleGame()
  }

  render() {
    return (
      <Sticky>
        <div id="home" className="bar">
          <a className="nav__item" href="#" onClick={() => this.toggleNav()}>
            <img className="bar__logo" src='https://res.cloudinary.com/garyou/image/upload/w_auto,c_scale,q_auto,dpr_auto/v1556808500/the-beths/logo.png' alt="the beths logo" />
          </a>
          <HamburgerButton
            open={this.state.isOpen}
            toggleNav={() => this.toggleNav()}
          />
        </div>
        <Nav
          open={this.state.isOpen}
          toggleNav={() => this.toggleNav()}
          toggleGame={() => this.activateGame()}
        />
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <p className="bar__nav--icon" onClick={props.toggleNav}>
      {props.open ? "x" : "="}
    </p>
  );
}
