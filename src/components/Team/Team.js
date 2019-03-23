import React from "react";

class Team extends React.Component {
  state = {};

  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}

export default Team;
