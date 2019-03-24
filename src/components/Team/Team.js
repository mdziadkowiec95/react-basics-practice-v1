import React from "react";
import axios from "axios";
import { APIkey } from "../../base/base";
import Title from "../Title/Title";
import Loader from "../Loader/Loader";

class Team extends React.Component {
  state = {
    teamID: "",
    isLoading: false
  };

  componentDidMount() {
    this.setState({ teamID: this.props.match.params.teamID }, this.getTeamData);
  }

  getTeamData = () => {
    this.setState({ isLoading: true });

    axios(`https://api.football-data.org/v2/teams/${this.state.teamID}/`, {
      method: "get",
      headers: { "X-Auth-Token": APIkey }
    })
      .then(response => {
        const data = response.data;

        this.setState({
          name: data.name,
          image: data.crestUrl,
          isLoading: false
        });

        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <Title>{this.state.name}</Title>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default Team;
