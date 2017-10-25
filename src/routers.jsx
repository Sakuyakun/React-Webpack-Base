import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./assets/css/demoStyle.scss";

// Router
import Navigation from "./views/navigation";
import Index from "./views/index";
import About from "./views/about";
import ExamplePage from "./views/examplePage";
import NoMatch from "./views/404";

@withRouter
export default class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;

    return (
      <div className={styles.view}>
        {/* Nav */}
        <div className={styles.toparea}>
          <Navigation />
        </div>
        {/* Component */}
        <div className={styles.bottomarea}>
          <Switch location={location}>
            <Route key={location.key} location={location} component={Index} exact path="/" />
            <Route key={location.key} location={location} component={ExamplePage} path="/examplepage" />
            <Route key={location.key} location={location} component={About} path="/about" />
            <Route key={location.key} location={location} component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}
