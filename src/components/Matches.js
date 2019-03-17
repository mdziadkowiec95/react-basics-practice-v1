import React from 'react';
import axios from 'axios';

const APIkey = 'e6884168bd114eaba96ad256f45cc5cf';

class Matches extends React.Component {
  state = {};

  getGames = () => {
    axios({
      method: 'GET',
      headers: { 'X-Auth-Token': APIkey },
      url: 'https://api.football-data.org/v2/matches',
    })
      .then((response) => {
        // handle success

        this.setState({ ...response.data });
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };



  render() {
    return (
      <div>
        <button onClick={() => this.getGames()}>Get games</button>
      </div>
    )
  }
}

export default Matches;


