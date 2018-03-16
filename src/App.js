import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Router, Route, IndexRoute  } from 'react-router'
import './App.css';
import Intervales from './pages/intervales';
import PureNotes from './pages/pureNotes';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route path='/intervales'>
              <Intervales />
            </Route>
            <Route path='/sound'>
              <PureNotes />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
