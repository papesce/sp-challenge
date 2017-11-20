import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {search, searchClear} from '../redux/actions'
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
  handleTextChanged(event) {
    const text = event.target.value;
    if (text.trim() === "")
      this.props.clear();  
    else {
      this.props.search(text);
    }
  }
  render() {
    const {classes} = this.props;
    return (
      <div >
        <TextField 
          className= {classes.bar}
          id="search"
          label="Enter text to search"
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
     search :  (text) => dispatch(search(text)),
     clear : () => dispatch(searchClear())
  }
}

export const SearchBarS = withStyles(styles)(SearchBar)

export default connect(undefined, mapDispatchToProps)(SearchBarS)