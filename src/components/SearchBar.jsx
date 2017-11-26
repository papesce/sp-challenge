import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { search, searchClear } from "../redux/actions";
import { withStyles } from "material-ui/styles";
import { getSearchText } from "../redux/selectors";

const styles = theme => ({
  bar: {
    marginLeft: 3 * theme.spacing.unit,
    marginRight: 3 * theme.spacing.unit,
    marginTop: 4 * theme.spacing.unit
    //width: "90%"
  }
});

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTextChanged = this.handleTextChanged.bind(this);
    this.dispatchSearch = this.dispatchSearch.bind(this);
  }
  handleTextChanged(event) {
    debugger;
    const text = event.target.value;
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    this.setState({
      typingTimeout: setTimeout(() => this.dispatchSearch(text), 500)
    });
  }
  dispatchSearch(text) {
    if (text.trim() === "") this.props.clear();
    else {
      this.props.search(text);
    }
  }
  componentDidMount() {
    //debugger;
  }
  render() {
    const { classes, searchText } = this.props;
    return (
      <TextField
        className={classes.bar}
        id="search"
        autoFocus
        label="Enter text to search"
        type="search"
        defaultValue={searchText}
        //npm className={classes.textField}
        margin="normal"
        onChange={this.handleTextChanged}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: text => dispatch(search(text)),
    clear: () => dispatch(searchClear())
  };
};

const mapStateToProps = state => {
  return {
    searchText: getSearchText(state)
  };
};

export const SearchBarS = withStyles(styles)(SearchBar);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarS);
