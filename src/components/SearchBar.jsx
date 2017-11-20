import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {search} from '../redux/actions'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    bar: {
      marginLeft: 5* theme.spacing.unit,
      marginRight:  5 * theme.spacing.unit,
      marginTop: 4 *  theme.spacing.unit,
      width: "90%"
    },
})

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleTextChanged = this.handleTextChanged.bind(this);
  }
  handleTextChanged() {
    this.props.search("jewel")
  }
  render() {
    const {classes} = this.props;
    return (
      <div >
        <TextField 
          className= {classes.bar}
          id="search"
          label="Enter albums name"
          type="search"
          //npm className={classes.textField}
          margin="normal"
          onChange={this.handleTextChanged}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     search :  (text) => dispatch(search(text))
  }
}

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(SearchBar))