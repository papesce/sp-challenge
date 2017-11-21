import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom' 

export default class RouteErrorComponent extends Component {
    componentDidMount(){
        //window.location.search = ""
    }
    render() {
    return (
      <div>
        <p>Error in route {JSON.stringify(this.props)}</p>
      </div>
    )
  }
}
