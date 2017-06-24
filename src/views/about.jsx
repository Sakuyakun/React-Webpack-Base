import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSendMessageActions } from '../actions/viewIndex.jsx'

class About extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1 styleName='title'>Reactx App</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
