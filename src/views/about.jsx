import React, { Component } from "react";
import { connect } from "react-redux";
import { setSendMessageActions } from "../actions/about";
import { Map } from "immutable";
import { css, withStyles } from "../withStyles";

@connect(
  state => {
    return {
      day: state.IndexReducers.getIn(["day"])
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
          配置文件有错误或者好的建议请联系我 <br />
          正使用该环境开发组件库 Yorha-Component <br />
          <br />
          壁纸 by WLOP<br />
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
