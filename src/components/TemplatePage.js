import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden"
  }
});

export class TemplatePage extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.container}>
        <TopAppBar />
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(TemplatePage);
