import React, { Component } from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";

// 使用BrowserRouter需要nginx做处理
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// 按需加载
// import Bundle from './utils/routerbundle'
// import ContentContainer from 'bundle-loader?lazy&name=[name]!./views/content.jsx';

// 异步引入
// const Content = () => {
//   <Bundle load={ContentContainer}>
//     { (Content) => <Content /> }
//   </Bundle>
// }

// Router
import Navigation from "./views/navigation";
import ViewIndex from "./views/viewIndex";
import About from "./views/about";
import NoMatch from "./views/404";

class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div styleName="view">
          {/* Router顶部导航 */}
          <div styleName="toparea">
            <Navigation />
          </div>
          {/* Router内容 */}
          <div styleName="bottomarea">
            <Switch>
              <Route exact path="/" component={ViewIndex} />
              <Route path="/content" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default CSSModules(Routers, styles);
