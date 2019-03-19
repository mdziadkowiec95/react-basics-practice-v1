import React from 'react';
import axios from 'axios';
import { allCompetitions } from '../../base/competitionData';
import { APIkey } from '../../base/base';
import AppContext from '../../context';
import styles from './SidebarList.module.scss';
import SidebarListItem from './SidebarListListItem';


const SidebarList = (props) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <AppContext.Consumer>
        {(context) => (
          !context.teams.length > 0
            ?
            allCompetitions.map(item => (
              <SidebarListItem key={item.code} {...item} />
            )) : context.teams.map(item => (
              <SidebarListItem
                key={item.id}
                code={item.shortName}
                name={item.name}
                image={item.crestUrl}
              />
            ))
        )}
      </AppContext.Consumer>

    </ul>
  </div>
);

export default SidebarList;