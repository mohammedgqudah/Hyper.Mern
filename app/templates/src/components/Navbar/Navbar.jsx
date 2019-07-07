import React, { Component } from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './navbar.module.scss';
import settings from '../../settings';
import Avatar from '../Avatar/Avatar.jsx';
import ChangeLanguageControl from '../ChangeLanguageControl/ChangeLanguageControl';
import Trans from '../i18n/Trans';
import SETTINGS from '../../settings';

@withRouter
@connect(
  state => ({ logged_in: state.auth.logged_in }),
  null,
  null,
  { pure: false }
)
class Navbar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.props.registerOnScroll(this.onScroll);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setColor();
    }
  }
  componentDidMount() {
    this.setColor();
  }
  setColor = _bg => {
    let bg;
    if (_bg) bg = _bg;
    else {
      let { pathname } = this.props.location;
      bg = SETTINGS.NAVBAR_COLORS[pathname];
    }
    let state = {};
    state.bg = false;
    state.primary = false;
    if (!bg) {
      let fallback = SETTINGS.NAVBAR_COLOR_FALLBACK;
      return this.setColor(fallback);
    } else if (bg === 'primary') {
      state.primary = true;
    } else {
      state.bg = bg;
    }
    this.setState(state);
  };
  onScroll = values => {
    let { _top } = this.state,
      { autoHide } = this.props,
      state = {},
      { top } = values;

    // save last captured top in state;
    state._top = top;
    /* ** check if scrolled to top ** */
    if (top === 0) state.scrolled = false;
    else state.scrolled = true;
    /* ******** */
    /* ** autoHide ** */
    if (autoHide) {
      if (_top && top > _top) state.hide = true;
      else state.hide = false;
    }
    /* ******** */
    this.setState(state);
  };
  render() {
    let { logged_in } = this.props;
    let { scrolled, hide, primary, bg } = this.state;
    return (
      <nav
        className={[
          styles.navbar,
          scrolled && styles.scrolled,
          hide && styles.hide,
          primary && styles.primary
        ].join(' ')}
        style={{ background: !scrolled && bg }}
        ref={e => (this.navbar = e)}
      >
        <div className={styles.title_box}>
          <h1 className={styles.title}>{settings.AppName}</h1>
        </div>
        <div className={styles.links}>
          <ul className={styles.ul}>
            {settings.links.map(({ name, to, ...rest }, idx) => (
              <li className={styles.li}>
                <Link
                  key={idx}
                  to={to}
                  className={styles.link}
                  {...rest}
                  activeClassName={styles.active}
                >
                  <Trans value={`links.${name}`} />
                </Link>
              </li>
            ))}
            <li className={[styles.li, styles.link].join(' ')}>
              <Trans value={`links.other`} />
            </li>
          </ul>
        </div>
        <div className={styles.user_nav}>
          {logged_in ? (
            <Avatar />
          ) : (
            <div>
              <Link
                to={'/login'}
                className={`${styles.button} ${styles.button}--small`}
              >
                <Trans value="login" />
              </Link>
              {/* FIXME: outline not working */}
              <Link
                to={'/signup'}
                className={[
                  styles.button,
                  `${styles.button}--small`,
                  `${styles.button}--outline`
                ].join(' ')}
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
