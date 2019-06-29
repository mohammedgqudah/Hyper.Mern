import React, { Component } from "react";

import styles from './contact-us.module.scss';
import settings from "../../settings";
import SocialLink from "../../components/SocialLink/SocialLink.jsx";
import Trans from "../../components/i18n/Trans";
import Dir from "../../components/i18n/Dir";

export default class ContactUs extends Component {
  render() {
    return (
      <div className={styles.contact_us}>
        <Dir>
          <div className={styles.card}>
            <h4 className={styles.small}>
              <Trans value="get_in_touch" />
            </h4>
            <h2 className={styles.title}>
              <Trans value="we'd_love_to_hear_from_you" />
              <br />
              info@hyper.dev
            </h2>
            <div className={styles.social}>
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
        </Dir>
      </div>
    );
  }
}
