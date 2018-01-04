import React, { Component } from 'react';
import pureRender from '@/utils/immutable-pure-render-decorator';
import Comp from '@/component/comp';
import styles from '@/assets/css/demoStyle.scss';
import ErrorBoundary from '@/utils/ErrorBoundary';
import TodoList from '@/component/TodoList';

@pureRender
export default class ExamplePage extends Component {
  state = {};
  componentWillMount() {}
  render() {
    const { info } = this.state;
    return (
      <div>
        <div className={styles.compContent}>
          <TodoList />
        </div>
      </div>
    );
  }
}
