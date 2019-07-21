import React, { Component } from 'react'
import './App.css';
import NavBar from './NavBar'
import AppViews from './ApplicationViews'

class Main extends Component {
  render () {
    return (
      <React.Fragment>
        <NavBar />
        <AppViews />
      </React.Fragment>
    )
  }
}

export default Main;
