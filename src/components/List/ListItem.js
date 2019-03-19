import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ id, name, shortName, image }) => (
  <li>{name}</li>
);

export default ListItem; 