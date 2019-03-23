import React from "react";
import styles from "./MatchesListItem.module.scss";
import { Link } from "react-router-dom";

const MatchesListItem = ({ id, homeTeam, awayTeam, date, matchday }) => (
  <li>
    <div className={styles.teams}>
      <Link to={id}>{homeTeam.name}</Link>
      <Link to={id}>{homeTeam.name}</Link>
    </div>
    <div className={styles.details}>
      <span>{date}</span>
      <span>{matchday}</span>
    </div>
  </li>
);

export default MatchesListItem;
