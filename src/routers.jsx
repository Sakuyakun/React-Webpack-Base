import React, { Component } from 'react';
import classNames from 'classnames'
import CSSModules from 'react-css-modules';
// 使用BrowserRouter需要nginx做处理
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styles from './style.scss'

import Navigation from './views/navigation.jsx'
import ViewIndex from './views/viewIndex.jsx'
import NoMatch from './views/404.jsx'

class Routers extends Component {
  render () {
    return (
      <Router>
        <div styleName='view'>
          <div>
            <Navigation />
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={ViewIndex} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default CSSModules(Routers, styles)
