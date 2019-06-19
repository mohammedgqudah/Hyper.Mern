import React, { Component } from "react";

import './SocialLink.scss';

export default class SocialLink extends Component {
  render() {
    const { link, img, name } = this.props;
    return (
      <a href={link} className="social-link" target="_blank">
        <img src={img} alt={name} className="social-icon" />
      </a>
    );
  }
}
