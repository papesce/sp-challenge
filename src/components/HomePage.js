import React, { Component } from "react";
import TopAppBar from "./TopAppBar";
import { Redirect } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const {isAuth} = this.props;
    if (!isAuth)  return <Redirect to="/login" />;  
    return (<div>
        <TopAppBar/>
        </div>
    );
  }
}
