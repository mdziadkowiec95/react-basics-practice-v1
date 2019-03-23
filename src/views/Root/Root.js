import React from "react";
import axios from "axios";
import { APIkey } from "../../base/base";
import styles from "./index.module.scss";

import AppContext from "../../context";
import MatchesView from "../MatchesView/MatchesView";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

class Root extends React.Component {
  state = {
    currentCode: "",
    generalInfo: {},
    teams: [],
    hasCompetitionData: false,
    isLoading: false
  };


 
  getCode = (code) => {
    this.setState({ currentCode: code }); 
  };

  render() {
    const { currentCode, generalInfo, teams } = this.state;
    const contextElements = {
      ...this.state,
      getCode: this.getCode
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/" />
              <Route path="/:code" component={MatchesView} />
            </Switch>
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
