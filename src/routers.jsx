import React, { Component } from "react";
import styles from "./style.scss";

// 使用BrowserRouter需要nginx做处理
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Router
import Navigation from "./views/navigation";
import Index from "./views/index";
import About from "./views/about";
import NoMatch from "./views/404";

class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className={styles.view}>
          {/* Router顶部导航 */}
          <div className={styles.toparea}>
            <Navigation />
          </div>
          {/* Router内容 */}
          <div className={styles.bottomarea}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/content" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
