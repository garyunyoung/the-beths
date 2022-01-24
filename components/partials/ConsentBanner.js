import React from "react";
import scss from "../../styles/ConsentBanner.scss";

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
        <div className="sticky-consent-banner">
          <div className="sticky-consent-banner__content">
            <button className="sticky-consent-banner__button sticky-consent-banner__button--close" onClick={() => this.close()}>
              x
            </button>
            <p className="sticky-consent-banner__text">
              {`hey! some of the features on our site require analytics to run.
              you can use the site without these features, but it's better with
              them!`}
            </p>
            <div className="sticky-consent-banner__buttons">
              <button className="sticky-consent-banner__button  sticky-consent-banner__button--decline" onClick={() => this.close()}>
                decline
              </button>
              <button className="sticky-consent-banner__button  sticky-consent-banner__button--accept" onClick={() => this.accept()}>
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
