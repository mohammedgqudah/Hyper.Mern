import React, { Component } from 'react';
import { Ghost } from 'react-kawaii';

import styles from './404.module.scss';
import Trans from '../../components/i18n/Trans';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.page}>
        <Ghost mood="sad" color="#9bace4" size={250} className={styles.ghost} />
        <h2 className={styles.title}>
          <Trans value="404_page_not_found" />
        </h2>
      </div>
    );
  }
}

export default ErrorPage;
