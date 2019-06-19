import React, { Component } from "react";

import "./ContactUs.scss";
import settings from "../../settings";
import SocialLink from "../../components/SocialLink/SocialLink.jsx";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <div className="ContactUs__card">
          <h4>Get in touch</h4>
          <h2>
            We'd love to hear from you
            <br />
            info@hyper.dev
          </h2>
          <div className="social">
            <SocialLink
              name="github"
              link={settings.SOCIAL.GITHUB}
              img="/assets/img/icons/github.png"
            />
            <SocialLink
              name="twitter"
              link={settings.SOCIAL.TWITTER}
              img="/assets/img/icons/twitter.png"
            />
            <SocialLink
              name="twitter"
              link={settings.SOCIAL.FACEBOOK}
              img="/assets/img/icons/facebook.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
