import React, { Component } from "react";
import { connect } from "react-redux";
import { setSendMessageActions } from "../actions/about";
import { Map } from "immutable";
import styles from "../assets/css/about";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={styles.title}>
          React SPA开发环境搭建练习用<br />
          如果有好的搭建建议请发issues告诉我 <br />
          github.com/Sakuyakun/React-Webpack-Base/issues <br />
          <br />
          {this.props.day}
        </span>
      </div>
    );
  }
  componentWillMount() {
    this.props.setSendMessage({
      day: "2017/08/07"
    });
  }
}

const mapStateToProps = state => {
  return {
    day: state.IndexReducers.get("day")
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
