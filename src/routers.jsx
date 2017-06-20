import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// 使用BrowserRouter需要nginx做处理

import Navigation from './views/navigation.jsx'
import ViewIndex from './views/viewIndex.jsx'
import NoMatch from './views/404.jsx'

export default class Routers extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ViewIndex} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
