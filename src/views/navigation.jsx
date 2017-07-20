import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/navigation";

// 顶部导航
export default class Navigation extends Component {
  render() {
    return (
      <div className={style.Nav}>
        <Link to="/">Yorha</Link>
        <Link to="/content">About</Link>
      </div>
    );
  }
}
