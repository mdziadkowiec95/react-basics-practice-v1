import React from 'react';
import styles from './Teams.module.scss';
import Title from '../Title/Title';
import List from '../List/List';
import CompetitionContext from '../../context';

const Teams = (props) => (
  <CompetitionContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <Title tag='h3'>Teams</Title>
        <List items={context.teams} />
      </div>
    )}
  </CompetitionContext.Consumer>
);

export default Teams;