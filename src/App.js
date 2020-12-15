import React, { Component } from 'react';
import Header from './components/Header';
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Appointments/>
      </div>
    );
  }
}

export default App;

