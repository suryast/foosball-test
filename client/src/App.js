import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  Box,
  Divider,
  Grid,
  Button,
  Typography
} from "@material-ui/core";

import HeaderNav from "./components/Header";
import MatchInput from "./components/MatchInput";
import Leaderboard from "./components/Leaderboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      players: [],
      response: "",
      textResponse: "",
      responseToPost: ""
    };
  }

  // display server is working
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  // handle server call
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmitPlayers = async e => {
    console.log(
      "Sending this as body to server: " + JSON.stringify(this.state.players)
    );
    e.preventDefault();
    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.players)
    });
    const body = await response.text();
    const parsedBody = JSON.parse(body);
    console.log(parsedBody);

    this.setState({
      textResponse: "I received your POST request.This is what you sent me: "
    });

    this.setState({ responseToPost: body });
  };

  handleSubmitResults = async e => {
    console.log(
      "Sending this as body to server: " + JSON.stringify(this.state.results)
    );
    e.preventDefault();
    const response = await fetch("/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.results)
    });
    const body = await response.text();

    this.setState({
      textResponse: ""
    });

    this.setState({ responseToPost: body });
  };

  // Store results to parent props
  updateResults(results) {
    this.setState({
      results
    });
  }

  // Update the player objects from the results using deconstruction – this will be messy
  updatePlayers(players) {
    this.setState({
      players
    });
  }

  // Function to show MatchInput
  matchInput() {
    return (
      <MatchInput
        results={this.state.results}
        players={this.state.players}
        updateResults={this.updateResults.bind(this)}
      />
    );
  }

  // Function to show Leaderboard
  viewLeaderboard() {
    return (
      <Leaderboard
        results={this.state.results}
        players={this.state.players}
        updatePlayers={this.updatePlayers.bind(this)}
      />
    );
  }

  render() {
    return (
      <Router>
        <HeaderNav />
        <Route exact path="/" component={this.matchInput.bind(this)} />
        <Route path="/input" component={this.matchInput.bind(this)} />
        <Route
          path="/leaderboard"
          component={this.viewLeaderboard.bind(this)}
        />

        <Divider variant="middle" />
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item>
              <Box my={4}>{this.state.response}</Box>
              <Typography variant="h6" component="h6" gutterBottom>
                Click below to interact with the server
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={this.handleSubmitPlayers.bind(this)}
              >
                Post Players[ ] to Server and receive JSON response
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleSubmitResults.bind(this)}
              >
                Post results[ ] to Server
              </Button>
              <Box color="red">
                <Typography variant="subtitle1" color="red">
                  {this.state.textResponse} <br />
                  {this.state.responseToPost}
                </Typography>
              </Box>
              <Divider variant="middle" />
            </Grid>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;
