import React from "react";
import Nav from "./Nav";
import "./Bar.css";
import logoBlack from "./images/logo-b.jpg";

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

  render() {
    return (
      <div className="bar-wrapper">
        <div className="bar">
          <img className="bar__logo" src={logoBlack} />
          <p
            className="bar__nav-icon"
            onClick={() => {
              this.toggleNav();
            }}
          >
            {this.state.isOpen ? "x" : "="}
          </p>
        </div>
        <Nav open={this.state.isOpen} />
      </div>
    );
  }
}
