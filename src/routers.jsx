import React, { Component } from "react";
import { css, withStyles } from "./withStyles";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Router
import Navigation from "./views/navigation";
import NoMatch from "./views/404";

//  按需加载
import Bundle from "./utils/routerbundle";
import IndexContainer from "bundle-loader?lazy!./views/index";
import ExamplePageContainer from "bundle-loader?lazy!./views/examplePage";
import AboutContainer from "bundle-loader?lazy!./views/about";

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
import hotaru from "./assets/images/64495434_p0.jpg";

@withRouter
@withStyles(({ color }) => ({
  view: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    background: `url(${hotaru})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  toparea: {
    height: "100px",
    width: "100%",
    lineHeight: "100px",
    background: "rgba(0,0,0,.4)",
    boxShadow: "0px -2px 2px 3px rgba(0, 0, 0, .4)",
    position: "fixed",
    zIndex: "2"
  },
  bottomarea: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    zIndex: "1",
    padding: "130px 30px 30px 30px",
    boxSizing: "border-box"
  },
  fadeAppear: {
    opacity: "0"
  },
  fadeEnter: {
    opacity: "0"
  },
  fadeAppearActive: {
    transition: "opacity .3s linear",
    opacity: "1"
  },
  fadeEnterActive: {
    transition: "opacity .3s linear",
    opacity: "1"
  },
  fadeExit: {
    transition: "opacity .2s linear",
    opacity: "1"
  },
  fadeExitActive: {
    opacity: "0"
  }
}))
export default class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };

    return (
      <div {...css(styles.view)}>
        {/* Nav */}
        <div {...css(styles.toparea)}>
          <Navigation />
        </div>
        {/* Component */}
        <TransitionGroup>
          <CSSTransition
            appear
            key={currentKey}
            timeout={timeout}
            classNames={{
              enter: css(styles.fadeEnter).className,
              enterActive: css(styles.fadeEnterActive).className,
              exit: css(styles.fadeExit).className,
              exitActive: css(styles.fadeExitActive).className
            }}
          >
            <div {...css(styles.bottomarea)}>
              <Switch location={location}>
                <Route
                  key={location.key}
                  location={location}
                  component={Index}
                  exact
                  path="/"
                />
                <Route
                  key={location.key}
                  location={location}
                  component={ExamplePage}
                  path="/examplepage"
                />
                <Route
                  key={location.key}
                  location={location}
                  component={About}
                  path="/about"
                />
                <Route
                  key={location.key}
                  location={location}
                  component={NoMatch}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
