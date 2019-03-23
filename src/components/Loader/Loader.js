import React from 'react';
import styles from './Loader.module.scss';
import cx from 'classnames';

const Loader = (props) => (
  <div className={styles.loader}>
    <div
      className={cx(
        styles.rect,
        styles.rectFirst
      )}></div>
    <div
      className={cx(
        styles.rect,
        styles.rectSecond
      )}></div>
    <div
      className={cx(
        styles.rect,
        styles.rectThird
      )}></div>
    <div
      className={cx(
        styles.rect,
        styles.rectFourth
      )}></div>
    <div
      className={cx(
        styles.rect,
        styles.rectFifth
      )}></div>
  </div>
);

export default Loader;