import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { APIkey } from '../../base/base';

import AllCompetitionsList from '../../components/AllCompetitionsList/AllCompetitionsList';


const AllCompetitionsView = () => (
  <>
    <AllCompetitionsList />
  </>
);


export default AllCompetitionsView;     