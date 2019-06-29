import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./navbar.module.scss";
import settings from "../../settings";
import Avatar from "../Avatar/Avatar.jsx";
import ChangeLanguageControl from "../ChangeLanguageControl/ChangeLanguageControl";
import Trans from "../i18n/Trans";

console.log('NAVBAR STYLES', styles);

@connect(
  state => ({ logged_in: state.auth.logged_in }),
  null,
  null,
  { pure: false }
)
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { logged_in } = this.props;
    return (
      <nav className={styles.navbar}>
        <div className={styles.title_box}>
          <h1 className={styles.title}>{settings.AppName}</h1>
        </div>
        <div className={styles.links}>
          <div>
            {settings.links.map(({ name, to, ...rest }, idx) => (
              <Link key={idx} to={to} className={styles.link} {...rest}>
                <Trans value={`links.${name}`} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.user_nav}>
          {logged_in ? (
            <Avatar />
          ) : (
            <div>
              <Link
                to={"/login"}
                className={`${styles.button} ${styles.button}--small ${styles.button}`}
              >
                <Trans value="login" />
              </Link>
              {/* FIXME: outline not working */}
              <Link
                to={"/signup"}
                className={`${styles.button} ${styles.button}--small ${styles.button}--outline`}
              >
                <Trans value="signup" />
              </Link>
            </div>
          )}
          <span className={styles.vr} />
          <ChangeLanguageControl />
        </div>
      </nav>
    );
  }
}

export default Navbar;
