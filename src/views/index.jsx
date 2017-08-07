import React, { Component } from "react";

import styles from "../assets/css/viewindex";

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span className={styles.title}>
          环境配置<br /><br />
          ES2015/2016<br />
          SASS or Aphrodite(css in js)<br />
          React <br />
          Immutable <br />
          React-Redux <br />
          React-Router4 <br />
          Webpack3 <br />
          Simple Production Boilerplate
        </span>
      </div>
    );
  }
}

export default Index;
