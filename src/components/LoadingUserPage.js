import React, {Component}  from 'react'
import TopAppBar from "./TopAppBar";


class LoadingUser extends Component {
    render () {
        return (
            <div >
               <TopAppBar/>
                <p> loading user data... </p>
            </div>)
    }
}


export default LoadingUser
