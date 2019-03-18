import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AllCompetitionsListItem.module.scss';
import AppContext from '../../context';

const AllCompetitionsListItem = ({ code, name, image }) => (
  <AppContext.Consumer>
    {(context) => (
      <li className={styles.listItem}>
        <NavLink
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink}
          // onClick={() => context.setActiveCompetition(code)}
          to={code}>
          <h1>{name}</h1>
          <p>{image}</p>
        </NavLink>
      </li>
    )}

  </AppContext.Consumer>
);

export default AllCompetitionsListItem;
