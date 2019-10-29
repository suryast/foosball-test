import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const Link1 = React.forwardRef((props, ref) => (
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
            <Link component={Link1} to="/input">
              Input Match Result
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link component={Link1} to="/leaderboard">
              Leaderboard
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Header;
