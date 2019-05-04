import React from "react";
import "./ConsentBanner.scss";

export default class ConsentBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  close() {
    this.setState({ isOpen: false });
  }

  accept() {
    this.setState({ isOpen: false });
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
      <div className="banner">
        <button className='btn' onClick={() => this.close()}>x</button>
        <p>this is the banner for cookie consent</p>
        <button className='btn' onClick={() => this.accept()}>accept</button>
      </div>
    );
  }
}
