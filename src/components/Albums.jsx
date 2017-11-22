import React, { Component } from "react";
import Album from "./Album";
import { GridList, GridListTile } from "material-ui/GridList";
import { withStyles } from "material-ui/styles";
import Subheader from "material-ui/List/ListSubheader";

const styles = theme => ({
  container: {
    flex: "1",
    display: "flex",
    paddingLeft: 1 * theme.spacing.unit,
    paddingRight: 1 * theme.spacing.unit,
    overflow: "hidden"
    //background: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    justifyContent: "space-around"
  }
});

export class Albums extends Component {
  render() {
    const { classes, albums, handleClick, title } = this.props;
    let ntitle = albums.length === 0 ? "No " + title : title;
    return (
      <div className={classes.container}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <Subheader component="div">{ntitle}</Subheader>
          </GridListTile>
          {albums &&
            albums.map((album, index) => (
              <Album key={index} album={album} handleClick={handleClick} />
            ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Albums);
