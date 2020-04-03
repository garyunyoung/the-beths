import React from "react";
import Nav from "./Nav";
import Sticky from "./_sticky";
import { logo } from "./cloudinary";
import scss from "../styles/Bar.scss";

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

  closeNav() {
    this.setState(() => ({
      isOpen: false
    }));
  }

  render() {
    return (
      <Sticky>
        <div id="home" className="bar">
          <Logo closeNav={() => this.closeNav()}/>
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
        <style jsx>{scss}</style>
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <a className="hamburger__btn" onClick={props.toggleNav}>
      {props.open ? "x" : "menu //"}
    </a>
  );
}

export function Logo(props) {
  return (
    <a className="nav__item" href="#" onClick={props.closeNav}>
      <img
        className={`${props.className} bar__logo cld-responsive`}
        src={logo}
        alt="the beths logo"
      />
    </a>
  );
}
