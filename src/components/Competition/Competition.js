import React from 'react';
import axios from 'axios';
import styles from './Competition.module.scss';
import { APIkey } from '../../base/base';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

class Competition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    // console.log(this.props);

    this.setState({ isLoading: true });

    axios(`https://api.football-data.org/v2/competitions/${this.props.code.competitionCode}/teams`, {
      method: 'get',
      headers: { 'X-Auth-Token': APIkey }
    })
      .then((response) => {
        const data = response.data;
        const teams = data.teams.map(el => {
          return {
            id: el.id,
            name: el.name,
            shortName: el.tla,
            image: el.crestUrl,
          }
        });

        this.setState({
          generalInfo: { name: data.competition.name, area: data.competition.area.name, ...data.season },
          teams: [...teams],
          isLoading: false
        });

        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }


  render() {
    const { generalInfo, isLoading } = this.state;

    if (isLoading) {
      return <Loader />
    }

    return (
      <>
        <Header {...generalInfo} />
        {/* {this.state.matches.map(el => `<p>${el.homeTeam.name} vs ${el.awayTeam.name}</p>`)} */}
      </>
    )
  }
}

export default Competition;   