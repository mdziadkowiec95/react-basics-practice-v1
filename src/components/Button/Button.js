import React from 'react';
import styles from './Button.module.scss';
import AppContext from '../../context';
import { Link } from 'react-router-dom'

const Button = (props) => (
  <AppContext.Consumer>
    {(context) => (
      <Link
        className={styles.navItemLink}
        to="/"
        onClick={(e) => context.getActiveCompetition(e, '')}
      >BACK</Link>
    )}
  </AppContext.Consumer>
);

export default Button;