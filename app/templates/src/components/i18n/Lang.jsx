import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({ i18n: state.i18n }))
class Lang extends Component {
  render() {
    const { i18n } = this.props;
    return i18n.current_lang;
  }
}
export default Lang;
