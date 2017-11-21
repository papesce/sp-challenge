import React, { Component } from 'react'
import Album from './Album' 
import { GridList, GridListTile } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';
import Subheader from 'material-ui/List/ListSubheader';


const styles = theme => ({
    container: {
      flex: "1",
      display: 'flex',
      paddingLeft: 5* theme.spacing.unit,
      paddingRight:  5 * theme.spacing.unit,
      overflow: 'hidden',
      //background: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
    },
  });

export class Albums extends Component {
  render() {
     const {classes, albums, handleClick} = this.props;  
    return (
      <div className={classes.container}>    
       <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">Albums</Subheader>
        </GridListTile>
        {albums && albums.items && albums.items.map((album, index) => (
            <Album key={index} album={album} handleClick={handleClick}/>
        ))}
      </GridList>
      </div>
    )
  }
}

export default withStyles(styles)(Albums)