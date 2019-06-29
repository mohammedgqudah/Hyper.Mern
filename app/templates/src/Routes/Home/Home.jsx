import React, { Component } from 'react';
import styles from './home.module.scss';
import wave from '../../helpers/wave';
import settings from '../../settings';
import Trans from '../../components/i18n/Trans';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    wave(this.waves);
  }
  render() {
    return (
      <div className={styles.home}>
        <canvas id={styles.waves} ref={e => (this.waves = e)} />
        <h2 className={styles.title}>
          <Trans value="welcome" /> {settings.AppName}
        </h2>
        <h3 className={styles.description}>
          <Trans value="description" />
        </h3>
        <div className={styles.center}>
          <img src="/assets/img/il1.svg" alt="" className="illustration" />
        </div>
      </div>
    );
  }
}

export default Home;
