import React, { Component } from "react";
import './index.less';

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="homeContainer">
        我的Demo
      </div>
    );
  }
}

export default Home;