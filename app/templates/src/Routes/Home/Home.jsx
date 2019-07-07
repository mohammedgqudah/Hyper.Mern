import React, { Component } from 'react';
import styles from './home.module.scss';
import settings from '../../settings';
import Trans from '../../components/i18n/Trans';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className={[styles.page, 'page'].join(' ')}>
        <div className={styles.bg}>
          <h2 className={styles.title}>
            <Trans value="welcome" /> {settings.AppName}
          </h2>
          <h3 className={styles.description}>
            <Trans value="description" />
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
