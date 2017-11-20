import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./router/Router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import green from 'material-ui/colors/green';

import "./App.css";
import "typeface-roboto";



//theme customization
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      ...green,
      '500' : "#43A047"
    }
  } 
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <Router />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
