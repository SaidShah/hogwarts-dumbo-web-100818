import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Pigpen from './Pigpen'
// import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Pigpen />
      </div>
    )
  }
}

export default App;
