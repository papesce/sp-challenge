import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const TopAppBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Spotify Challenge
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default TopAppBar;