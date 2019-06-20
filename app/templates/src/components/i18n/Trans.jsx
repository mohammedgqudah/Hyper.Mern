import React, { Component } from "react";
import { connect } from "react-redux";

Object.defineProperty(Object.prototype, "getNestedProperty", {
  value: function(propertyName) {
    let that = this;
    let arr = propertyName.split(".");

    while (arr.length && that) {
      that = that[arr.shift()];
    }

    return that;
  },
  enumerable: false
});

@connect(state => ({ i18n: state.i18n }))
class Trans extends Component {
  render() {
    const { value = "", i18n } = this.props;
    let src = i18n.languages[i18n.current_lang];
    return src.getNestedProperty(value) || "";
  }
}
export default Trans;
