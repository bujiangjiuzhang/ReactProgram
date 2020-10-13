import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home/index'
import Heard from './pages/Heard/index'
import Hook from './pages/Hook/index'
import VitialList from './pages/VitialList/index'
import './App.less';

class App extends Component {
  render(){
    const details="我的Demo"
  return (
    <div>
      <Heard {...this.props} details={details} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/hook" component={Hook} />
          <Route path="/vitialList" component={VitialList} />
        </Switch>
    </div >
  );
  }
}

export default App;
