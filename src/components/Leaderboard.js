import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Button
} from "@material-ui/core";

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.results,
      players: props.players
    };
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Box my={4}>
              <Typography variant="h5" component="h5">
                Match Statistics
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h6" gutterBottom>
                Total games played: <span>{this.props.results.length}</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h6" gutterBottom>
                Number of players: <span>{this.props.players.length}</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h6" gutterBottom>
                Top Players:
              </Typography>
              {[...this.props.players].reverse().map((player, i) => {
                return (
                  <Box key={i}>
                    <span>
                      {i + 1} . <span>{player.name}</span> W: {player.won}
                    </span>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item sm={6}>
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
