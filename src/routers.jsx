import React, { Component } from "react";
import styles from "./style.scss";

// 使用BrowserRouter需要nginx做处理
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createHashHistory'

// Router
import Navigation from "./views/navigation";
// import Index from "./views/index";
import NoMatch from "./views/404";

//  按需加载
import Bundle from './utils/routerbundle';
import IndexContainer from 'bundle-loader?lazy!./views/index';
import AboutContainer from 'bundle-loader?lazy!./views/about';

const history = createHistory();

//  异步引入
const Index = () => (
  <Bundle load={IndexContainer}>
    { (Index) => <Index /> }
  </Bundle>
);
const About = () => (
  <Bundle load={AboutContainer}>
    { (About) => <About /> }
  </Bundle>
);

class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <div className={styles.view}>
          {/* Router顶部导航 */}
          <div className={styles.toparea}>
            <Navigation />
          </div>
          {/* Router内容 */}
          <div className={styles.bottomarea}>
            <Route render={({location}) => {
              return (
                <div key={location.path}>
                  <Route location={location} exact path="/" component={Index} />
                  <Route location={location} path="/content" component={About} />
                  <Route component={NoMatch} />
                </div>
              )
            }} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
