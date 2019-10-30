import React, { Component } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Container,
  Divider,
  Radio
} from "@material-ui/core";
import moment from "moment";

export default class MatchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamOne: [""],
      teamTwo: [""],
      results: [],
      errormsg: null
    };
  }

  addMatchDetails() {
    // Get all player values per team.
    let teamArray1 = [],
      teamArray2 = [];

    for (let i = 0; i < this.state.teamOne.length; i++) {
      const inputfield = document.getElementById("teamOne_player_" + (i + 1));
      if (inputfield.value !== null || inputfield.value !== "")
        teamArray1.push(inputfield.value);
    }
    for (let i = 0; i < this.state.teamTwo.length; i++) {
      const inputfield = document.getElementById("teamTwo_player_" + (i + 1));
      if (inputfield.value !== null || inputfield.value !== "")
        teamArray2.push(inputfield.value);
    }

    // Check for selected winner
    let winner = null;
    if (document.getElementById("radioBlue").checked) {
      winner = document.getElementById("radioBlue").value;
    } else if (document.getElementById("radioGreen").checked) {
      winner = document.getElementById("radioGreen").value;
    }

    // Validate the submission details
    if (!winner) {
      this.setState({
        errormsg: "Select a winner"
      });
      return false;
    }

    if (
      document.getElementById("teamOne_player_1").value === "" ||
      document.getElementById("teamTwo_player_1").value === ""
    ) {
      this.setState({
        errormsg: "At least one player per team"
      });
      return false;
    } else {
      this.setState({ errormsg: "" });
    }

    // create temp array to duplicate state
    const matches = this.props.results;
    matches.push({
      teamOne: teamArray1,
      teamTwo: teamArray2,
      winner: parseInt(winner),
      date: new moment()
    });

    const players = this.props.players;
    teamArray1.map(player => {
      players.push({
        name: player,
        win: 0,
        played: 0
      });
    });

    teamArray2.map(player => {
      players.push({
        name: player,
        win: 0,
        played: 0
      });
    });

    // Update storage and reset local state
    document.getElementById("teamOne_player_1").value = null;
    document.getElementById("teamTwo_player_1").value = null;
    this.setState({
      teamOne: [""],
      teamTwo: [""]
    });

    // Update Global app state
    this.props.updateResults(matches, players);
  }

  addTeamMember(team) {
    if (team === "Blue") {
      //push new team member object
      const team = this.state.teamOne;
      team.push({});
      this.setState({
        teamOne: team
      });
    } else {
      const team = this.state.teamTwo;
      team.push({});
      this.setState({
        teamTwo: team
      });
    }
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Box my={4}>
              <Typography variant="h5" component="h5">
                Add New Match:
              </Typography>
            </Box>
            <Box my={4} color="blue">
              <Typography variant="h6" component="h6">
                Team Blue WON?
                <Radio id="radioBlue" color="primary" value={1} name="winner" />
              </Typography>

              {this.state.teamOne.map((member, i) => {
                const inputId = "teamOne_player_" + (i + 1);
                return (
                  <Box key={i}>
                    <TextField label="Player Name" id={inputId} />
                  </Box>
                );
              })}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addTeamMember.bind(this, "Blue")}
            >
              Add to Team Blue{" "}
            </Button>

            <Box my={4} color="green">
              <Typography variant="h6" component="h6">
                Team Green WON?
                <Radio
                  id="radioGreen"
                  color="secondary"
                  value={2}
                  name="winner"
                />
              </Typography>

              {this.state.teamTwo.map((member, i) => {
                const inputId = "teamTwo_player_" + (i + 1);
                return (
                  <Box key={i}>
                    <TextField label="Player Name" id={inputId} />
                  </Box>
                );
              })}
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.addTeamMember.bind(this, "Green")}
            >
              Add to Team Green{" "}
            </Button>
            <Box my={4} color="green">
              <Button
                variant="contained"
                component="span"
                onClick={this.addMatchDetails.bind(this)}
              >
                Create Match Record
              </Button>
            </Box>
            <Box>{this.state.errormsg}</Box>
          </Grid>

          <Grid item>
            <Box my={4}>
              <Typography variant="h5" component="h5">
                Recent Matches:
              </Typography>
            </Box>

            {[...this.props.results].reverse().map((match, i) => {
              return (
                <Box my={4} key={i}>
                  <Box my={2} color="blue">
                    <Typography variant="h6" component="h6">
                      {match.winner === 1 ? (
                        <span className="tag-winner"> W: </span>
                      ) : null}
                      Team Blue
                    </Typography>
                    <Box my={1}>
                      {match.teamOne.length >= 2
                        ? match.teamOne.map((member, i) => {
                            return <span key={i}>{member} / </span>;
                          })
                        : match.teamOne.map((member, i) => {
                            return <span key={i}>{member}</span>;
                          })}
                    </Box>
                  </Box>
                  <Box my={2} color="green">
                    <Typography variant="h6" component="h6">
                      {match.winner === 2 ? (
                        <span className="tag-winner">W: </span>
                      ) : null}
                      Team Green
                    </Typography>
                    <Box my={1}>
                      {match.teamTwo.length >= 2
                        ? match.teamTwo.map((member, i) => {
                            return <span key={i}>{member} / </span>;
                          })
                        : match.teamTwo.map((member, i) => {
                            return <span key={i}>{member}</span>;
                          })}
                    </Box>
                  </Box>
                  <Box my={2}>{match.date.format("MMMM Do YYYY, h:mm a")}</Box>
                  <Divider variant="middle" />
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
