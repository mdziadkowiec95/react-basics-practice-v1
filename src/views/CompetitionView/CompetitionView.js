import React from 'react';
import Competition from '../../components/Competition/Competition';
import AppContext from '../../context';

const CompetitionView = (props) => (
  <Competition code={props.match.params} />
);

export default CompetitionView;    