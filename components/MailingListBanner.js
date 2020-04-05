import React from "react";
import scss from "../styles/MailingListBanner.scss";

export default class MailingListBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ""
    };
  }

  render() {
    return (
      <section className="mailing-list-banner">
        <div className="mailing-list-banner__wrapper">
          <div id="mc_embed_signup">
            <form
              action="https://thebeths.us20.list-manage.com/subscribe/post?u=0bfa27c5341eacbfd10d85a43&amp;id=05cac296b0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll" className="mailing-list-banner__form-content">
                <label htmlFor="mce-EMAIL" className="mailing-list-banner__email-input-label">join our mailing list!</label>
                <div className="mailing-list-banner__input-wrapper input-wrapper">
                  <input
                    type="email"
                    value={this.state.emailValue}
                    onChange={e => {
                      this.setState({ emailValue: e.target.value });
                    }}
                    name="EMAIL"
                    className="mailing-list-banner__email-input-field email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <div className="mailing-list-banner__aria aria" aria-hidden="true">
                    <input
                      type="text"
                      name="b_0bfa27c5341eacbfd10d85a43_05cac296b0"
                      tabIndex="-1"
                      value=""
                      readOnly
                    />
                  </div>
                  <div className="clear">
                    <input
                      className="mailing-list-banner__submit-button button"
                      type="submit"
                      value="subscribe >>>"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <style jsx>{scss}</style>
      </section>
    );
  }
}
