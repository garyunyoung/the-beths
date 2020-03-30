import React from "react";
import Socials from "./Socials";

import scss from "../styles/ConsentBanner.scss";

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
    this.props.allowTracking();
  }

  render() {
    if (this.state.wasDismissed || this.props.consent) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="banner">
          <div className="mailing-list-banner">
            <div className="mailing-list-banner__signup">
              <p className="mailing-list-banner__text">join the mailing list</p>
              <p className="mailing-list-banner__email">
                garyunyoung@gmail.com
              </p>
            </div>
            <div className="mailing-list-banner__socials">
              <Socials
                className="mailing-list-banner__social"
                width="24"
                color={"black"}
              />
            </div>
          </div>
          <div className="banner__consent">
            <button className="btn btn--x" onClick={() => this.close()}>
              x
            </button>
            <p className="banner__text">
              hey! some of the features on our site require analytics to run.
              you can use the site without these features, but it's better with
              them!
            </p>
            <div className="banner__buttons">
              <button className="btn btn--d" onClick={() => this.close()}>
                decline
              </button>
              <button className="btn btn--a" onClick={() => this.accept()}>
                accept 🍪
              </button>
            </div>
          </div>
          <style jsx>{scss}</style>
        </div>
      </React.Fragment>
    );
  }
}
