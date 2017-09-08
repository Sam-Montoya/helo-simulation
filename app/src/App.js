import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Switch>
          <Route path='/dashboard' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;



