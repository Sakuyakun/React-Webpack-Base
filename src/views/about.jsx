import React, { Component } from "react";
import { connect } from "react-redux";
import { setSendMessageActions } from "../actions/about";
import { Map } from "immutable";
import { css, withStyles } from "../withStyles";

@connect(
  state => {
    return {
      day: state.IndexReducers.get("day")
    };
  },
  dispatch => {
    return {
      setSendMessage: data => {
        dispatch(setSendMessageActions(data));
      }
    };
  }
)
@withStyles(({ color }) => ({
  title: {
    fontSize: "16px",
    color: color.text
  }
}))
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    return (
      <div>
        <span {...css(styles.title)}>
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
