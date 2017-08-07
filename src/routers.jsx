import React, { Component } from "react";
import styles from "./style.scss";

// 使用BrowserRouter需nginx做处理
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createHashHistory'

// Router
import Navigation from "./views/navigation";
import NoMatch from './views/404';

//  按需加载
import Bundle from './utils/routerbundle';
import IndexContainer from 'bundle-loader?lazy!./views/index';
import ExamplePageContainer from 'bundle-loader?lazy!./views/examplePage';
import AboutContainer from 'bundle-loader?lazy!./views/about';

const history = createHistory();

//  异步引入
const Index = () => (<Bundle load={IndexContainer}>{ (Index) => <Index /> }</Bundle>);
const About = () => (<Bundle load={AboutContainer}>{ (About) => <About /> }</Bundle>);
const ExamplePage = () => (<Bundle load={ExamplePageContainer}>{ (ExamplePage) => <ExamplePage /> }</Bundle>);

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
            <Switch>
              <Route location={location} exact path="/" component={Index} />
              <Route location={location} path="/examplepage" component={ExamplePage} />
              <Route location={location} path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
