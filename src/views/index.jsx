import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

@withStyles(({ color }) => ({
  title: {
    color: color.text,
    fontWeight: "100",
    transform: "translateY(-75px)",
    "-webkit-font-smoothing": "antialiased",
    fontSize: "50px"
  },
  index: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
}))
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.index)}>
        <span {...css(styles.title)}>Yorha Boilerplate</span>
      </div>
    );
  }
}
