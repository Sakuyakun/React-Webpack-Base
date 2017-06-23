import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSendMessageActions } from '../actions/viewIndex.jsx'

class viewIndex extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    let data = { message: `
      React开发环境搭建练习用，目前还有许多不完善的地方，如果有好的建议规范请在Issues告诉我。
    `}
    this.props.setSendMessage(data)
  }
  render () {
    return (
      <div>{`欢迎！${this.props.message}`}</div>
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
