import React from 'react';
import styles from './Sidebar';
import SidebarList from '../Sidebar/SidebarList';

const Sidebar = (props) => (
  <div className={styles.wrapper}>
    <SidebarList />
  </div>
);

export default Sidebar; 