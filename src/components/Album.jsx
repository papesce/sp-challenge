import React, { Component } from "react";
import { GridListTile, GridListTileBar } from "material-ui/GridList";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import InfoIcon from "material-ui-icons/Info";

const styles = theme => ({
  tile: {
    margin: theme.spacing.unit,
    overflow: "hidden",
    height: 300
  }
});

export class Album extends Component {
  render() {
    const { classes, album, handleClick } = this.props;
    //debugger;
    return (
      <GridListTile className={classes.tile} key={album.id}>
        <img
          src={album.images[1].url}
          alt={album.name}
          href={album.external_urls.spotify}
        />
        <GridListTileBar
          title={
            <a style={{ color: "white" }} href={album.external_urls.spotify}>
              {album.name}
            </a>
          }
          subtitle={<span>by: {album.artists[0].name}</span>}
          actionIcon={
            <div>
              <IconButton onClick={() => handleClick(album)}>
                <InfoIcon color="rgba(255, 255, 255, 0.54)" />
              </IconButton>
              {/* <IconButton onClick={() => handleClick(album.id)} >
                  <ZoomInIcon color="rgba(255, 255, 255, 0.54)"/>
                </IconButton> */}
            </div>
          }
        />
      </GridListTile>
    );
  }
}

export default withStyles(styles)(Album);
