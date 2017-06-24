// 暂未开启按需加载路由功能 此文件保留
// routerbundle 用于路由异步加载组件
import React, { Component } from 'react'

export default class Bundle extends Component {
    state = {
        mod: null
    }
    componentWillMount() {
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        if (!this.state.mod) {
          return false
        }
        return this.props.children(this.state.mod)
    }
}
