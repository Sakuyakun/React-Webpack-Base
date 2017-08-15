import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { css, withStyles } from "../withStyles";

// 顶部导航
@withRouter
@withStyles(({ color, unit }) => ({
  link: {
    color: color.text,
    fontSize: "20px",
    marginLeft: "30px"
  },
  link_hover: {
    color: color.linkhover
  }
}))
export default class Navigation extends Component {
  render() {
    const { styles, location } = this.props;
    return (
      <div>
        <Link
          {...css(styles.link, location.pathname === "/" && styles.link_hover)}
          to="/"
        >
          Index
        </Link>
        <Link
          {...css(
            styles.link,
            location.pathname === "/examplepage" && styles.link_hover
          )}
          to="/examplepage"
        >
          Example
        </Link>
        <Link
          {...css(
            styles.link,
            location.pathname === "/about" && styles.link_hover
          )}
          to="/about"
        >
          About
        </Link>
      </div>
    );
  }
}
