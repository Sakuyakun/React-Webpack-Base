import React, { Component } from "react";
import { Map, is } from "immutable";
import pureRender from "../utils/immutable-pure-render-decorator";

// 使用css in js
import { StyleSheet, css } from "aphrodite";
import styles from "../assets/css-in-js/examplePage";
const injs = StyleSheet.create(styles);

@pureRender
class ShowName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { val } = this.props;
    val = val + " & A2";
    return (
      <div>
        队伍成员：{val}
      </div>
    );
  }
}

@pureRender
class ShowGame extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { val } = this.props;
    return (
      <div>
        队伍名称：{val}
      </div>
    );
  }
}

class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: Map({
        name: "2B",
        game: "Yorha"
      })
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <div className={css(injs.title)}>
          <ShowName val={info.get("name")} />
          <ShowGame val={info.get("game")} />
        </div>
      </div>
    );
  }
}

export default ExamplePage;
