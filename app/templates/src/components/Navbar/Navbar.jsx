import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.scss";
import settings from "../../settings";
import Avatar from "../Avatar/Avatar.jsx";
import ChangeLanguageControl from "../ChangeLanguageControl/ChangeLanguageControl";
import Trans from "../i18n/Trans";

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
      <nav className="Navbar">
        <div className="title-box">
          <h1 className="title">{settings.AppName}</h1>
        </div>
        <div className="links">
          <div>
            {settings.links.map(({ name, to, ...rest }, idx) => (
              <Link key={idx} to={to} className="link" {...rest}>
                <Trans value={`links.${name}`} />
              </Link>
            ))}
          </div>
        </div>
        <div className="user-nav">
          {logged_in ? (
            <Avatar />
          ) : (
            <div>
              <Link
                to={"/login"}
                className="user-nav__Link user-nav__Link--small "
              >
                <Trans value="login" />
              </Link>
              <Link
                to={"/signup"}
                className="user-nav__Link user-nav__Link--small user-nav__Link--outline"
              >
                <Trans value="signup" />
              </Link>
            </div>
          )}
          <span className="vr" />
          <ChangeLanguageControl />
        </div>
      </nav>
    );
  }
}

export default Navbar;
