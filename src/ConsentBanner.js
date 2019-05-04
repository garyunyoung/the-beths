import React from "react";
import "./ConsentBanner.scss";


export default class ConsentBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasDismissed: false
    };
  }

  close() {
    this.setState({ wasDismissed: true });
  }

  accept() {
    this.props.allowTracking()
  }

  render() {
    if (this.state.wasDismissed || this.props.consent) {
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
