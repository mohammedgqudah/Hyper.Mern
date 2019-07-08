import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiTranslate } from '@mdi/js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

import './ChangeLanguageControl.scss';
import { CHANGE_LANGUAGE } from '../../store/actions/constants';
import Dropdown from '../Dropdown/Dropdown';
import DropdownList from '../DropdownList/DropdownList';

@connect(
  null,
  d => ({ dispatch: d })
)
class ChangeLanguageControl extends Component {
  state = { open: false, anchorEl: null };
  changeLang = lang => {
    return () => {
      this.props.dispatch({ type: CHANGE_LANGUAGE, payload: lang });
      this.onClose();
    };
  };
  render() {
    let list = [
      { content: 'english', onClick: this.changeLang('en') },
      { content: 'arabic', onClick: this.changeLang('ar') }
    ];

    return (
      <Dropdown click render={<DropdownList list={list} />}>
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
        </span>
      </Dropdown>
    );
  }
}

export default ChangeLanguageControl;
