import React, { Component } from "react";

import styles from "../assets/css/viewindex.scss";

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span className={styles.title}>
          ES2015/2016 SASS<br />
          React <br />
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
