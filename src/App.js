import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./index.module.scss";
import Competitions from "./components/Competitions/Competitions";
import Matches from "./components/Matches/Matches";
import Team from "./components/Team/Team";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/" component={Competitions} />
            <Route exact path="/:code" component={Matches} />
            <Route path="/:code/team/:teamID" component={Team} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
