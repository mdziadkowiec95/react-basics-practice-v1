import React from "react";
import styles from "./Item.module.scss";

const Item = ({ count, id, name, position, shirtNumber, nationality }) => (
  <tr className={styles.row} data-id={id}>
    <th scope="row">{count}</th>
    <td>{name}</td>
    <td>{nationality}</td>
    <td>{position ? position : "unknown"}</td>
    <td>{shirtNumber ? shirtNumber : "?"}</td>
  </tr>
);

export default Item;
