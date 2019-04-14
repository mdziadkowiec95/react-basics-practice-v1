import React from "react";
import axios from "axios";
import { APIkey } from "../../base/base";
import styles from "./Matches.module.scss";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import MatchesList from "./MatchesList";

class Matches extends React.Component {
  state = {
    generalInfo: {},
    matches: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState(
      {
        isLoading: true,
        competitionCode: this.props.match.params.code
      },
      this.getMatchesData
    );
  }

  getMatchesData = () => {
    axios(
      `https://api.football-data.org/v2/competitions/${
        this.state.competitionCode
      }/matches?status=SCHEDULED&limit=5`,
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
          const fullTime =
            el.score.fullTime.homeTeam !== null
              ? [el.score.fullTime.homeTeam, el.score.fullTime.awayTeam]
              : null;

          const halfTime = el.score.halfTime.homeTeam
            ? [el.score.halfTime.homeTeam, el.score.halfTime.homeTeam]
            : null;

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
            matchday: el.matchday,
            score: {
              fullTime: fullTime,
              halfTime: halfTime
            }
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
  };

  render() {
    const { generalInfo, matches, isLoading } = this.state;
    const match = this.props.match;
    console.log(match);

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Title additional="upcoming matches">{generalInfo.name}</Title>
        <div className={styles.wrapper}>
          <MatchesList match={match} items={matches} />
        </div>
      </>
    );
  }
}

export default Matches;
