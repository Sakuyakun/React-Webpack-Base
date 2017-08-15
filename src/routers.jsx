import React, { Component } from "react";
import { css, withStyles } from "./withStyles";

// 使用BrowserRouter需nginx做处理
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createHashHistory";

// Router
import Navigation from "./views/navigation";
import NoMatch from "./views/404";

//  按需加载
import Bundle from "./utils/routerbundle";
import IndexContainer from "bundle-loader?lazy!./views/index";
import ExamplePageContainer from "bundle-loader?lazy!./views/examplePage";
import AboutContainer from "bundle-loader?lazy!./views/about";

const history = createHistory();

//  异步引入
const Index = () =>
  <Bundle load={IndexContainer}>
    {Index => <Index />}
  </Bundle>;
const About = () =>
  <Bundle load={AboutContainer}>
    {About => <About />}
  </Bundle>;
const ExamplePage = () =>
  <Bundle load={ExamplePageContainer}>
    {ExamplePage => <ExamplePage />}
  </Bundle>;

// 背景图
import nier2b from "./assets/images/nier2b.jpg";

@withStyles(({ color }) => ({
  view: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    background: `url(${nier2b})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column"
  },
  toparea: {
    height: "100px",
    lineHeight: "100px",
    background: "rgba(0,0,0,.4)",
    boxShadow: "0px -2px 6px 3px rgba(0, 0, 0, .4)"
  },
  bottomarea: {
    padding: "30px",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "0%"
  }
}))
export default class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    return (
      <Router history={history}>
        <div {...css(styles.view)}>
          {/* Router顶部导航 */}
          <div {...css(styles.toparea)}>
            <Navigation />
          </div>
          {/* Router内容 */}
          <div {...css(styles.bottomarea)}>
            <Switch>
              <Route component={Index} exact path="/" />
              <Route component={ExamplePage} path="/examplepage" />
              <Route component={About} path="/about" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
