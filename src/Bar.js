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
  }

  closeAll() {
    this.toggleNav();
    this.setState(_props => ({
      gameIsOpen: false
    }));
  }

  closeNav() {
    this.setState(_props => ({
      isOpen: false
    }))
  }

  render() {
    return (
      <Sticky>
        <div id="home" className="bar">
          <a className="nav__item" href="#" onClick={() => this.closeNav()}>
            <img className="bar__logo" src={logoBlack} alt="the beths logo" />
          </a>
          <HamburgerButton
            open={this.state.isOpen}
            closeAll={() => this.closeAll()}
          />
        </div>
        <Nav
          open={this.state.isOpen}
          toggleNav={() => this.toggleNav()}
          toggleGame={() => this.toggleGame()}
        />
        <Game open={this.state.gameIsOpen} />
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <p className="bar__nav--icon" onClick={props.closeAll}>
      {props.open ? "x" : "="}
    </p>
  );
}
