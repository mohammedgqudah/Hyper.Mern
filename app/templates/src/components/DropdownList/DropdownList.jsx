import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './dropdown-list.module.scss';

export default class DropdownList extends Component {
  render() {
    let { list } = this.props;
    return (
      <ul className={styles.list}>
        {list.map(({ content, onClick, to }) => {
          return (
            <li className={styles.item} onClick={onClick}>
              {to ? <Link to={to}>{content}</Link> : content}
            </li>
          );
        })}
      </ul>
    );
  }
}
