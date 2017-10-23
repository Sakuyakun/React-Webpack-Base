import React, { Component } from "react";
import pureRender from "../utils/immutable-pure-render-decorator";
import Comp from "../component/comp";
import styles from '../assets/css/demoStyle.scss';

@pureRender
export default class ExamplePage extends Component {
  state = {
    info: [
      "component 1 content in yorha",
      "component 2 content in yorha",
      "component 3 content in yorha",
      "component 4 content in yorha",
      "component 5 content in yorha"
    ]
  };
  render() {
    const { info } = this.state;

    return (
      <div>
        <div className={styles.compContent}>
          {info.map((item, index) => <Comp key={index} content={item} />)}
        </div>
      </div>
    );
  }
}
