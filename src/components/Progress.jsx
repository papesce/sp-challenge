import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    bar: {
      marginLeft: 5* theme.spacing.unit,
      marginRight:  5 * theme.spacing.unit,
      marginTop: 4 *  theme.spacing.unit,
    },
})

export class Progress extends Component {
  render() {
    const {classes, status = "loading..."} = this.props
    return (
      <CircularProgress
      size={40}
      left={10}
      top={0}
      status={status}
      className={classes.bar}
    />
    )
  }
}

export default withStyles(styles)(Progress)






