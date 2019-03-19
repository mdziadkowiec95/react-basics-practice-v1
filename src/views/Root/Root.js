import React from 'react';
import axios from 'axios';
import { APIkey } from '../../base/base';
import { allCompetitions } from '../../base/competitionData';
import styles from './index.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import MatchesView from '../MatchesView/MatchesView';
import CompetitionView from '../CompetitionView/CompetitionView';


import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

class Root extends React.Component {
  state = {
    generalInfo: {},
    teams: [],
    hasCompetitionData: false,
    isLoading: false,
  };

  getActiveCompetition = (e, code) => {
    this.setState({ activeCompetition: code });

    !this.state.hasCompetitionData && this.getCompetitionData(code);
  }

  getCompetitionData = (activeCompetition) => {
    this.setState({ isLoading: true });

    axios(`https://api.football-data.org/v2/competitions/${activeCompetition}/teams`, {
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
          hasCompetitionData: true,
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

  };


  render() {
    const { generalInfo, teams } = this.state;
    const contextElements = {
      ...this.state,
      getActiveCompetition: this.getActiveCompetition,
    };

    // console.log(contextElements);

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header {...generalInfo} />
          <div className={styles.wrapper}>
            <Sidebar />
            <Switch>
              <Route exact path="/" />
              <Route
                path="/:code"
                component={MatchesView} />
            </Switch>
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;


