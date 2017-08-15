import React, { Component } from "react";
import { Map, is } from "immutable";
import pureRender from "../utils/immutable-pure-render-decorator";
import { css, withStyles } from "../withStyles";

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

@withStyles(({ color }) => ({
  compContent: {
    fontSize: "16px",
    color: color.text
  }
}))
export default class ExamplePage extends Component {
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
    const { styles } = this.props;

    return (
      <div>
        <div {...css(styles.compContent)}>
          <ShowName val={info.get("name")} />
          <ShowGame val={info.get("game")} />
        </div>
      </div>
    );
  }
}
