import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from '../assets/css/navigation.scss'

// 导航
export default class Navigation extends Component {
  render () {
    return (
      <div className={style.Nav}>
        <Link to='/'>viewIndex</Link>
        <Link to='/404'>404</Link>
      </div>
    )
  }
}
