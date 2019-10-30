import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderNav from "./components/Header";
import moment from "moment";
import MatchInput from "./components/MatchInput";
import Leaderboard from "./components/Leaderboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      players: []
    };
  }

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
        <div>
          <HeaderNav />
          <Route exact path="/" component={this.matchInput.bind(this)} />
          <Route path="/input" component={this.matchInput.bind(this)} />
          <Route
            path="/leaderboard"
            component={this.viewLeaderboard.bind(this)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
