import React from 'react';
import axios from 'axios';
import { APIkey } from '../../base/base';
import styles from './Matches.module.scss';

class Matches extends React.Component {
  state = {
    matches: [],
  };

  componentDidMount() {
    axios(`https://api.football-data.org/v2/competitions/${this.props.context.activeCompetition}/matches?status=SCHEDULED&limit=50`, {
      method: 'get',
      headers: { 'X-Auth-Token': APIkey }
    })
      .then((response) => {
        const data = response.data.matches;
        const matches = data.map(el => {
          return {
            id: el.id,
            homeTeam: el.homeTeam.name,
            awayTeam: el.awayTeam.name,
            date: el.utcDate,
          }
        });

        this.setState({
          matches: [...matches],
        })

      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }


  render() {
    return (
      this.state.matches.map(item => `${item.homeTeam} vs ${item.awayTeam}`)
    )
  }
};

export default Matches;