import React, { Component } from "react";
import pureRender from "../utils/immutable-pure-render-decorator";
import Comp from "../component/comp";
import styles from "../assets/css/demoStyle.scss";
import ErrorBoundary from "../component/ErrorBoundary";

@pureRender
export default class ExamplePage extends Component {
  state = {
    info: [
      "react component in yorha",
      "react component in yorha",
      "react component in yorha"
    ]
  };
  render() {
    const { info } = this.state;

    return (
      <div>
        <div className={styles.compContent}>
          {
            info.map((item, index) => 
              <ErrorBoundary key={index}>
                <Comp content={item} />
              </ErrorBoundary>
            )
          }
        </div>
      </div>
    );
  }
}
