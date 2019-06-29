import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiTranslate } from '@mdi/js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

import './ChangeLanguageControl.scss';
import { CHANGE_LANGUAGE } from '../../store/actions/constants';

@connect(
  null,
  d => ({ dispatch: d })
)
class ChangeLanguageControl extends Component {
  state = { open: false, anchorEl: null };
  onClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  onClose = event => {
    this.setState({ anchorEl: null });
  };
  changeLang = lang => {
    return () => {
      this.props.dispatch({ type: CHANGE_LANGUAGE, payload: lang });
      this.onClose();
    };
  };
  render() {
    const { anchorEl } = this.state;

    return (
      <span className="ChangeLanguage">
        <Icon
          aria-controls="translate-menu"
          aria-haspopup="true"
          path={mdiTranslate}
          size={0.8}
          color="#ffffff"
          onClick={this.onClick}
          className="icon"
        />
        <Menu
          id="translate-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.onClose}
        >
          <MenuItem onClick={this.changeLang('en')}>
            <div className="lang-item">
              <img
                src="/assets/img/icons/english.png"
                alt="english"
                className="logo"
              />
              English
            </div>
          </MenuItem>
          <MenuItem onClick={this.changeLang('ar')}>
            <div className="lang-item">
              <img
                src="https://www.shareicon.net/download/2016/07/04/637192_arabia_512x512.png"
                alt="english"
                className="logo"
              />
              عربية
            </div>
          </MenuItem>
        </Menu>
      </span>
    );
  }
}

export default ChangeLanguageControl;
