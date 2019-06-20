import React, { Component } from "react";
import "./home.scss";
import wave from "../../helpers/wave";
import settings from "../../settings";
import Trans from "../../components/i18n/Trans";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    wave("waves");
  }
  render() {
    return (
      <div className="Home">
        <canvas id="waves" />
        <h2 className="intro-text">
          <Trans value="welcome" /> {settings.AppName}
        </h2>
        <h3 className="description">
          <Trans value="description" />
        </h3>
        <div className="center">
          <img src="/assets/img/il1.svg" alt="" className="illustration" />
        </div>
      </div>
    );
  }
}

export default Home;
