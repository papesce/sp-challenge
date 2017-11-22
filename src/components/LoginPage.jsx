import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import logo from "../spotify-logo.png";

const styles = theme => ({
  card: {
    display: "flex",
    margin: theme.spacing.unit
  },
  details: {
    display: "flex",
    flexDirection: "column",
    "max-width": "390px"
  },
  content: {
    flex: "1 0 auto"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  cover: {
    marginLeft: 2 * theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 4 * theme.spacing.unit,
    minWidth: "50px",
    height: "50px"
  }
});

class LoginPage extends Component {
  render() {
    const { classes, login_url } = this.props;
    return (
      <div>
        <TopAppBar />
        <Card className={classes.card}>
          <CardMedia className={classes.cover} image={logo} title="" />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="body1">
                To use this app you need to have a Spotify account. Please use
                the button below to login to Spotify.
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <CardActions>
                <Button raised color="primary" href={login_url}>
                  Login to Spotify
                </Button>
              </CardActions>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LoginPage);
