import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../assets/css/demoStyle.scss";

// 顶部导航
@withRouter
export default class Navigation extends Component {
  render() {
    const icon_github = "fa fa-github fa-3x ";
    const { location } = this.props;

    return (
      <div>
        <Link
          className={
            styles.link + " " + (location.pathname === "/" && styles.link_hover)
          }
          to="/"
        >
          index
        </Link>
        <Link
          className={
            styles.link +
            " " +
            (location.pathname === "/examplepage" && styles.link_hover)
          }
          to="/examplepage"
        >
          examplepage
        </Link>
        <Link
          className={
            styles.link +
            " " +
            (location.pathname === "/about" && styles.link_hover)
          }
          to="/about"
        >
          about
        </Link>
        <a
          href="https://github.com/Sakuyakun/Yorha-Boilerplate"
          target="_blank"
        >
          <i className={icon_github + " " + styles.icon} />
        </a>
      </div>
    );
  }
}
