import React from 'react';
import axios from 'axios';
import { APIkey } from '../../base/base';
import styles from './index.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import AllCompetitionsView from '../AllCompetitionsView/AllCompetitionsView';
import CompetitionView from '../CompetitionView/CompetitionView';

class Root extends React.Component {
  state = {
    activeCompetition: [],
  };

  setActiveCompetition = (code) => {
    this.setState({ activeCompetition: code });
  };

  // getCompetition = (code) => {
  //   axios(`https://api.football-data.org/v2/competitions/${code}/matches?status=SCHEDULED&limit=50`, {
  //     method: 'get', 
  //     headers: { 'X-Auth-Token': APIkey }
  //   })
  //   .then((response) => {
  //     const matches = response.data.matches;

  //     this.setState({ activeCompetition: matches });
  //     console.log(response); 
  //   })  
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .then(() => {
  //     // always executed
  //   });  
  // };

  render() {
    const contextElements = {
      ...this.state,
      setActiveCompetition: this.setActiveCompetition,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={AllCompetitionsView} />
            <Route
              path="/:competitionCode"
              component={CompetitionView} />}
            />
            </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;


