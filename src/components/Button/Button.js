import React from 'react';
import styles from './Button';
import { NavLink } from 'react-router-dom'

const Button = (props) => (
  <NavLink
    activeClassName={styles.navItemLinkActive}
    className={styles.navItemLink}
    to="/"
  // onClick={(e) => context.getActiveCompetition(e, code)}
  >BACK</NavLink>
);

export default Button;