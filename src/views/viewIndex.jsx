import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSendMessageActions } from '../actions/viewIndex.jsx'

import CSSModules from 'react-css-modules';
import styles from '../assets/css/viewindex.scss'

class ViewIndex extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <span styleName='title'>
          React <br/>
          and React-Redux <br/>
          and React-Router4 <br/>
          with webpack3 <br/>
          ES6 Enviorment SetUp
        </span>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.message)
  }
}

export default CSSModules(ViewIndex, styles)
