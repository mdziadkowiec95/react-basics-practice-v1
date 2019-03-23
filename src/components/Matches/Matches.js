import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import { APIkey } from "../../base/base";
import styles from "./Matches.module.scss";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import MatchesList from "./MatchesList";

class Matches extends React.Component {
  state = {
    matches: [],
    isLoading: false
  };

  componentDidMount() {
    const competition = this.props.match.params.code;

    this.setState({ isLoading: true });

    axios(
      `https://api.football-data.org/v2/competitions/${competition}/matches?status=SCHEDULED&limit=50`,
      {
        method: "get",
        headers: { "X-Auth-Token": APIkey }
      }
    )
      .then(response => {
        const data = response.data;
        const generalInfo = {
          id: data.competition.id,
          name: data.competition.name,
          area: data.competition.area.name
        };
        const matches = data.matches.map(el => {
          return {
            id: el.id,
            homeTeam: {
              id: el.homeTeam.id,
              name: el.homeTeam.name
            },
            awayTeam: {
              id: el.awayTeam.id,
              name: el.awayTeam.name
            },
            date: el.utcDate,
            matchday: el.matchday
          };
        });

        this.setState({
          generalInfo: { ...generalInfo },
          matches: [...matches],
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    const { matches, isLoading } = this.state;
    const match = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Title>Upcoming Matches</Title>
        <div className={styles.wrapper}>
          <MatchesList items={matches} />
        </div>
      </>
    );
  }
}

export default Matches;
