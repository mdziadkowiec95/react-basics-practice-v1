import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./MatchesListItem.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

const MatchesListItem = ({
  match,
  id,
  homeTeam,
  awayTeam,
  date,
  matchday,
  score
}) => {
  const formatDate = date => {
    const dateArr = date.split("T");
    const dateCut = dateArr[0];
    const time = dateArr[1].replace("Z", "");

    return `${dateCut} - ${time}`;
  };

  return (
    <li className={styles.wrapper}>
      <div id={id} className={styles.teams}>
        <Link
          to={`${match.url}/team/${homeTeam.id}`}
          className={cx(styles.team, styles.teamHome)}
        >
          {homeTeam.name}
        </Link>
        <span className={styles.versus}>-vs-</span>
        <Link
          to={`${match.url}/team/${awayTeam.id}`}
          className={cx(styles.team, styles.teamAway)}
        >
          {awayTeam.name}
        </Link>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>
          {score.fullTime
            ? `${score.fullTime[0]} : ${score.fullTime[1]}`
            : formatDate(date)}
        </span>
        <span className={styles.matchday}>MatchDay: {matchday}</span>
      </div>
    </li>
  );
};

export default MatchesListItem;
