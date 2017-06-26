import React, { Component } from "react";
import { connect } from "react-redux";
import { setSendMessageActions } from "../actions/viewIndex.jsx";

import CSSModules from "react-css-modules";
import Styles from "../assets/css/about.scss";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span styleName="title">
          REACT SPA开发环境搭建练习用，<br />
          目前依旧存在许多不完善的地方。<br />
          如果有好的搭建建议请在Issues告诉我。 <br />
          github.com/Sakuyakun/React-Webpack-Base/issues <br /><br />
          Sakuya 2017/06/15
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.viewReducer.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSendMessage: data => {
      dispatch(setSendMessageActions(data));
    }
  };
};

const ComponentWithCSS = CSSModules(About, Styles);
export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithCSS);
