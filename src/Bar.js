import React from "react";
import Nav from "./Nav";
import Sticky from "./Sticky";
import "./Bar.scss";
import logoBlack from "./images/logo-b.png";

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      fontColor: 'black'
    };
  }

  toggleNav() {
    this.setState((prevState, _props) => ({
      isOpen: !prevState.isOpen,
      fontColor: 'black'
    }));
  }

  render() {
    return (
      <Sticky>
        <div className="bar">
          <img className="bar__logo" src={logoBlack} alt="the beths logo"/>
          <HamburgerButton open={this.state.isOpen} toggleNav={() => this.toggleNav()} color={this.state.fontColor}/>
        </div>
        <Nav open={this.state.isOpen} toggleNav={() => this.toggleNav()}/>
      </Sticky>
    );
  }
}

function HamburgerButton(props) {
  return (
    <p
      className="bar__nav--icon"
      onClick={props.toggleNav}
      style={{color: props.fontColor}}
    >
      {props.open ? "x" : "="}
    </p>
  );
}


