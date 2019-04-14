import React from "react";
import styles from "./List.module.scss";
import Item from "./Item";

const List = ({ players }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Player</th>
        <th scope="col">Nationality</th>
        <th scope="col">Position</th>
        <th scope="col">Shirt number</th>
      </tr>
    </thead>
    <tbody>
      {players &&
        players.map((player, index) => (
          <Item key={player.id} count={index} {...player} />
        ))}
    </tbody>
  </table>
);

export default List;
