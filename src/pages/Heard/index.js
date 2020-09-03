/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./index.less";

// const { Content } = Layout;

const list = [
  "Home",
  "ReactHooks"
];

const url = [
  "/home",
  "/hook"
];



class Heard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      indexClick: null,
      showMenu: false
    };
  }

  componentDidMount() {

  }



  handleClick = index => {
    const { history } = this.props;
    console.log(history,this.props)
    if (history) {
      history.push(url[index]);
      this.setState({
        indexClick: null,
        current: index
        // showMenu: index === 4 && true
      });
    }
  };

  changeonMouseOver = index => {
    this.setState({
      showMenu: index === 4 && true
    });
  };

  changeonMouseOut = index => {
    this.setState({
      showMenu: false
    });
  };


  render() {
    const { details } = this.props
    const { current }=this.state;

    const top = list.map((e, index) => {
      return (
        <span key={index.toString()}>
          <span
            className="init"
            onClick={() => this.handleClick(index)}
            onMouseOver={() => this.changeonMouseOver(index)}
            style={current===index?{ textAlign: 'center',backgroundColor:'rgb(51, 51, 122)'}:null}
          >
            {e}
          </span>
        </span>

      );
    });

    return (
      <div className="basicLayout">
        <div className="header">
          <div className="logo">{details && details.name}</div>

          <div className="listMenu">{top}</div>
        </div>
      </div>
    );
  }
}
export default Heard;
