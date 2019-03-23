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
            <Route path="/:code" component={Matches} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
