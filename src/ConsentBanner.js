import React from "react";
import { docCookies } from "./cookies";
import "./ConsentBanner.scss";

const cookieName = "beths-EU-consent";

export default class ConsentBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    const cookie = docCookies.getItem(cookieName);
    if (cookie === null) {
      this.setState({ isOpen: true });
    } else {
      this.props.loadAnalytics();
    }
  }

  close() {
    this.setState({ isOpen: false });
  }

  accept() {
    docCookies.setItem(cookieName, "accepted");
    this.setState({ isOpen: false });
    this.props.loadAnalytics();
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
      <div className="banner">
        <button className="btn btn--x" onClick={() => this.close()}>
          x
        </button>
        <p className='banner__text'>this is the banner for cookie consent</p>
        <button className="btn btn--a" onClick={() => this.accept()}>
          accept
        </button>
      </div>
    );
  }
}
