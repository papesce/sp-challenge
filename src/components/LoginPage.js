import React, { Component } from "react";
import AccountBox from 'material-ui-icons/AccountBox'
import TopAppBar from './TopAppBar'


class LoginPage extends Component {
  render() {
    return (
      <div >
         <TopAppBar/>
        <p>login page</p>
        <AccountBox /> 
      </div>
    );
  }
}

export default LoginPage
