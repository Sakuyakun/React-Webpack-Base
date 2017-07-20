import React, { Component } from "react";
import { connect } from "react-redux";
import { setSendMessageActions } from "../actions/index.jsx";
import styles from "../assets/css/about.scss";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span className={styles.title}>
          REACT SPA开发环境搭建练习用<br />
          如果有好的搭建建议请在Issues告诉我 <br />
          github.com/Sakuyakun/React-Webpack-Base/issues <br /><br />
          Sakuya 2017/06/15
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.IndexReducers.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSendMessage: data => {
      dispatch(setSendMessageActions(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
