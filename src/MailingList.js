import React from "react";
import dag from "./images/fmhm-dog.png";
import "./MailingList.scss";

export default class MailingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ""
    };
  }

  render() {
    return (
      <section className="mailingList">
        <img className="mailingList__dag" src={dag} />
        <div className="mailingList__wrapper">
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us20.list-manage.com/subscribe/post?u=0bfa27c5341eacbfd10d85a43&amp;id=05cac296b0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">join the mailing list!</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    value={this.state.emailValue}
                    onChange={e => {
                      this.setState({ emailValue: e.target.value });
                    }}
                    name="EMAIL"
                    className="email"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <div className="aria" aria-hidden="true">
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
                      className="button"
                      type="submit"
                      value=">"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://thebeths.us20.list-manage.com/subscribe/post?u=0bfa27c5341eacbfd10d85a43&amp;id=05cac296b0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<label for="mce-EMAIL">Subscribe</label>
// 	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
//     <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0bfa27c5341eacbfd10d85a43_05cac296b0" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup--></div>
