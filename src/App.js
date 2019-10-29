import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderNav from "./components/Header";
import moment from "moment";
import MatchInput from "./components/MatchInput";

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
      ]
    };
  }

  updateResults(results) {
    this.setState({
      results
    });
  }

  matchInput() {
    return (
      <MatchInput
        results={this.state.results}
        updateResults={this.updateResults.bind(this)}
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
        </div>
      </Router>
    );
  }
}

export default App;
