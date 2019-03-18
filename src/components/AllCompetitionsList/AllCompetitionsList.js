import React from 'react';
import axios from 'axios';
import { allCompetitions } from '../../base/competitionData';
import { APIkey } from '../../base/base';
import styles from './AllCompetitionsList.module.scss';
import AllCompetitionsListItem from './AllCompetitionsListItem';


class AllCompetitionsList extends React.Component {
  state = {
    allCompetitions: [...allCompetitions],
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {this.state.allCompetitions.map(item => (
            <AllCompetitionsListItem key={item.code} {...item} />
          ))}
        </ul>
      </div>
    )
  }
};

export default AllCompetitionsList;