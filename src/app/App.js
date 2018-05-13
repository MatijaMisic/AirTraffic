import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import MainPage from './MainPage/MainPage';
import Header from './common/Header/Header';
import SingleFlight from './SingleFlightPage/SingleFlight'
import Footer from './common/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/flight/:id' component={SingleFlight} />
        <Footer />
      </div>
    );
  }
}

export default App;
