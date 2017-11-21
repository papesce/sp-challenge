import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import SearchBar from './SearchBar';
import AlbumsContainer from "../containers/AlbumsContainer";
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: "column",
    height: "100vh",
    //marginLeft: 5* theme.spacing.unit,
    //marginRight:  5 * theme.spacing.unit,
    overflow: 'hidden',
    //background: theme.palette.background.paper,
  }
});


export class HomePage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <TopAppBar />
        <SearchBar />
        <AlbumsContainer />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage)