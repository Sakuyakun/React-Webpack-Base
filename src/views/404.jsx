import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

function NotMatch({ styles }) {
  return <div {...css(styles.color)}>Sorry, Page not found !</div>;
}

export default withStyles(({ color }) => ({
  compContent: {
    color: color.text
  }
}))(NotMatch);
