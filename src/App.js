import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './screens/HomePage';
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'

class App extends Component {
  render() {
    return (
      <div className="container py-5">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile}/>
     
      </div>
    );
  }
}

export default App;

//<Route exact path="/profile/:userId" component={Profile} /> 
