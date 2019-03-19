import React from 'react';
import AppContext from '../../context';
import Matches from '../../components/Matches/Matches';

const MatchesView = (props) => (
  <AppContext.Consumer>
    {(context) => (
      <Matches context={context} />
    )}

  </AppContext.Consumer>
);

export default MatchesView;    