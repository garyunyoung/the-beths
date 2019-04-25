import React from "react";
import Nav from "./Nav";
import Game from "./Game";
import Sticky from "./Sticky";
import logoBlack from "./images/logo-b.png";
import "./Bar.scss";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      gameIsOpen: false
    };
  }

  toggleNav() {
    this.setState((prevState, _props) => ({
      isOpen: !prevState.isOpen
    }));
  }

  toggleGame() {
    this.setState((prevState, _props) => ({
      gameIsOpen: !prevState.gameIsOpen
    }));

    console.log('this worked')
  }

  render() {
    return (
      <Sticky>
        <div id="home" className="bar">
          <img className="bar__logo" src={logoBlack} alt="the beths logo" />
          <HamburgerButton
            open={this.state.isOpen}
            toggleNav={() => this.toggleNav()}
            color={this.state.fontColor}
          />
        </div>
        <Nav open={this.state.isOpen} toggleNav={() => this.toggleNav()} toggleGame={() => this.toggleGame()}/>
        <Game open={this.state.gameIsOpen} toggleGame={() => this.toggleGame()}/>
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <p
      className="bar__nav--icon"
      onClick={props.toggleNav}
      style={{ color: props.fontColor }}
    >
      {props.open ? "x" : "="}
    </p>
  );
}
