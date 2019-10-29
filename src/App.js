import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderNav from "./components/header/header";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [
        {
          team1: ["Player 1"],
          team2: ["Player 2"],
          winner: 1,
          date: new moment()
        }
      ]
    };
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
        </div>
      </Router>
    );
  }
}

export default App;
