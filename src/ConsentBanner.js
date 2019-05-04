import React from "react";
import "./ConsentBanner.scss";

export default class ConsentBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <p>this is the banner for cookie consent</p>
        <button>accept</button>
      </div>
    );
  }
}
