import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { BrowserRouter as Router, Route ,Switch ,Redirect} from "react-router-dom";
// react-router 4不支持直接从react-router中直接取hashHistory
// import { HashRouter as Router, Route, hashHistory } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
// import { createHashHistory } from 'history'

// const hashHistory = createHashHistory();

const routes = (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        {/* <Route path="/user" component={LoginPage} /> */}
        <Route path="/" component={App} />
      </Switch>
    </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
