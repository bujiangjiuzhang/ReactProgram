import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home/index'
import Heard from './pages/Heard/index'
import Hook from './pages/Hook/index'
import './App.less';

class App extends Component {
  render(){
  return (
    <div>
      <Heard {...this.props} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/hook" component={Hook} />
        </Switch>
    </div >
  );
  }
}

export default App;
