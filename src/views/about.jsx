import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSendMessageActions } from '../actions/viewIndex.jsx'

import CSSModules from 'react-css-modules';
import Styles from '../assets/css/about.scss'

class About extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <span styleName='title'>Reactxx App</span>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.message)
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.viewReducer.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSendMessage: (data) => {
      dispatch(setSendMessageActions(data))
    }
  }
}
const ComponentWithCSS = CSSModules(About, Styles)
export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithCSS)
