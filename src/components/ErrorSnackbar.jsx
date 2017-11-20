import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

export class ErrorSnackbar extends Component {
  constructor(props) {
    super(props)
    this.state= {open : true};
  }
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, message = "" } = this.props;
    const {open} = this.state 
    return (
      <Snackbar
        className={classes.snackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={<Button color="accent" dense onClick={this.handleRequestClose}>
              close
              </Button>}
          message={<span id="message-id">{message}</span>}
        />
    )
  }
}

export default withStyles(styles)(ErrorSnackbar)