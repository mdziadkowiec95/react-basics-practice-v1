import React from "react";
import styles from "./Competitions";
import Title from "../Title/Title";
import CompetitionsList from "./CompetitionsList";
import { allCompetitionsArr } from "../../base/allCompetitionsData";

class Competitions extends React.Component {
  state = {
    competitions: [...allCompetitionsArr]
  };

  render() {
    return (
      <>
        <Title>Choose a competition</Title>
        <CompetitionsList items={this.state.competitions} />
      </>
    );
  }
}

export default Competitions;
