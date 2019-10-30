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
      results: [
        {
          teamOne: ["Sample Player 1"],
          teamTwo: ["Sample Player 2"],
          winner: 1,
          date: new moment()
        }
      ],
      players: [
        {
          name: "Sample Player 1",
          win: 1,
          played: 0
        },
        {
          name: "Sample Player 2",
          win: 0,
          played: 0
        }
      ]
    };
  }

  updateResults(results, players) {
    this.setState({
      results
    });
    this.setState({
      players
    });
  }

  matchInput() {
    return (
      <MatchInput
        results={this.state.results}
        players={this.state.players}
        updateResults={this.updateResults.bind(this)}
      />
    );
  }

  viewLeaderboard() {
    return <Leaderboard results={this.state.results} />;
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
