import React, { Component } from 'react';
import { connect } from 'react-redux';

import rtl from './rtl';

@connect(state => ({ i18n: state.i18n }))
class Dir extends Component {
  render() {
    const { i18n, children } = this.props;
    let dir = rtl.includes(i18n.current_lang) ? 'rtl' : 'ltr';
    return React.cloneElement(children, { dir });
  }
}
export default Dir;
