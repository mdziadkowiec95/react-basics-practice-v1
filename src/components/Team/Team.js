import React from "react";
import axios from "axios";
import { APIkey } from "../../base/base";
import styles from "./Team.module.scss";
import Header from "./Header";
import Loader from "../Loader/Loader";
import List from "./List";

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

        const squad = data.squad.map(player => {
          return {
            id: player.id,
            name: player.name,
            position: player.position,
            shirtNumber: player.shirtNumber,
            nationality: player.nationality
          };
        });

        this.setState({
          name: data.name,
          image: data.crestUrl,
          address: data.address,
          website: data.website,
          founded: data.founded,
          stadium: data.venue,
          squad: squad,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  render() {
    const {
      name,
      image,
      address,
      website,
      founded,
      stadium,
      squad,
      isLoading
    } = this.state;

    const headerDetails = {
      name,
      image,
      address,
      website,
      founded,
      stadium
    };

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Header {...headerDetails} />
        <div className={styles.wrapper}>
          <List players={squad} />
        </div>
      </>
    );
  }
}

export default Team;
