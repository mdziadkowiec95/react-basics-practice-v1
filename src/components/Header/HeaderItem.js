import React from 'react';
import styles from './HeaderItem.module.scss';

const labels = ['Season start', 'Season end', 'MatchDay', 'Winner'];

const HeaderItem = ({ index, children }) => (
  <div className={styles.item}>
    <label className={styles.label}>{labels[index]}: </label>
    <span className={styles.info}>{children ? children : 'Unknown'}</span>
  </div>
);


export default HeaderItem; 