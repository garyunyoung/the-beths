import React from "react";
import Nav from "./Nav";
import Sticky from "./Sticky";
import "./Bar.scss";
import logoBlack from "./images/logo-b.png";

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
      <Sticky>
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
        <Nav open={this.state.isOpen} toggleNav={() => this.toggleNav()}/>
      </Sticky>
    );
  }
}


