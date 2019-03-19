axios(`https://api.football-data.org/v2/competitions/${this.props.code.competitionCode}/matches?status=SCHEDULED&limit=50`




componentDidMount() {
  console.log(this.props);
  axios(`https://api.football-data.org/v2/competitions/${this.props.code.competitionCode}`, {
    method: 'get',
    headers: { 'X-Auth-Token': APIkey }
  })
    .then((response) => {
      const data = response.data;

      this.setState({
        generalInfo: { ...data.currentSeason, name: data.name, area: data.area.name }
      });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      // always executed
    });
}