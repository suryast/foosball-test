import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Box, Link, Container, Grid } from "@material-ui/core";

const LinkWithRoute = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

class Header extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h2" component="h1" gutterBottom>
            Foosball Test
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Link component={LinkWithRoute} to="/input">
              Input Match Result
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link component={LinkWithRoute} to="/leaderboard">
              Leaderboard
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Header;
