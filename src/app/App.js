import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';
import Header from './common/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
