import React from 'react';
import styles from './Title.module.scss';

const Title = ({ additional, children }) => (
  <h2 className={styles.title}>
    {children}
    <span className={styles.additional}> ({additional})</span>
  </h2>
);

export default Title;    