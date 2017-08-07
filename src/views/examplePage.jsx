import React, { Component } from 'react';
import { Map, is } from 'immutable';

// 使用css in js
import { StyleSheet, css } from 'aphrodite';
import styles from '../assets/css-in-js/examplePage';
const injs = StyleSheet.create(styles)

// 高阶组件 利用immutable is方法避免组件重复渲染
const PuerComponentShouldUpdate = (Comp) => {
  return class extends Component {
    constructor(props) {
      super(props)
    }
    shouldComponentUpdate (nextProps, nextState) {
      const thisProps = this.props || {}, thisState = this.state || {};
      if (Object.keys(thisProps).length !== Object.keys(nextProps || {}).length ||
          Object.keys(thisState).length !== Object.keys(nextState || {}).length) {
        return true;
      }
      for (const key in nextProps) {
        if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
          return true;
        }
      }
      for (const key in nextState) {
        if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
          return true;
        }
      }
      return false;
    }

    render() {
      return <Comp {...this.props} />
    }
  }
}

class ShowName extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {val} = this.props
    val = val + ' & A2'
    return (
      <div>
          队伍成员：{val}
      </div>
    );
  }
}
class ShowGame extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {val} = this.props
    val = val + ' & A2'
    return (
      <div>
          队伍名称：{val}
      </div>
    );
  }
}
ShowName = PuerComponentShouldUpdate(ShowName)
ShowGame = PuerComponentShouldUpdate(ShowGame)

class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: Map({
        name: '2B',
        game: 'Yorha'
      })
    }
  }
  render() {
    const {info} = this.state
    return (
      <div>
        <div className={css(injs.title)}>
          <ShowName val={info.get('name')} />
          <ShowGame val={info.get('game')} />
        </div>
      </div>
    );
  }
}


export default ExamplePage;
