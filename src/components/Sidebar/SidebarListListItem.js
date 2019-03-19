import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarListItem.module.scss';
import AppContext from '../../context';

const SidebarListItem = ({ code, name, image }) => (
  <li className={styles.navItem}>
    <AppContext.Consumer>
      {(context) => (
        <NavLink
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink}
          to={code}
          onClick={(e) => context.getActiveCompetition(e, code)}
        >
          <h1 className={styles.header}>{name}</h1>
          <p className={styles.image}>{image}</p>
        </NavLink>
      )}
    </AppContext.Consumer>
  </li>
);

export default SidebarListItem;
