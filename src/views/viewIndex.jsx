import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSendMessageActions } from '../actions/viewIndex.jsx'

class viewIndex extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    let data = { message: 'message from viewIndexRedux'}
    this.props.setSendMessage(data)
  }
  render () {
    return (
      <div>{`Welcome ! ${this.props.message}`}</div>
    );
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

viewIndex = connect(mapStateToProps, mapDispatchToProps)(viewIndex)

export default viewIndex;
