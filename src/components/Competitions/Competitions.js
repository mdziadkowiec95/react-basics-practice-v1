import React from "react";
import styles from "./Competitions";
import CompetitionsList from "./CompetitionsList";
import { allCompetitionsArr } from "../../base/allCompetitionsData";

class Competitions extends React.Component {
  state = {
    competitions: [...allCompetitionsArr]
  };

  render() {
    return <CompetitionsList items={this.state.competitions} />;
  }
}

export default Competitions;
