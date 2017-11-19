import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {search} from '../redux/actions'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleTextChanged = this.handleTextChanged.bind(this);
  }
  handleTextChanged() {
    this.props.search("jewel")
  }
  render() {
    return (
      <div>
        <TextField
          id="search"
          label="Search field"
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

export default connect(undefined ,mapDispatchToProps)(SearchBar)
