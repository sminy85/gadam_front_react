import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../css/style.css'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChild
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, NavLink, Switch } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'

library.add(
  faChild
  // more icons go here
)

function Header () {
  return (
    <div>
      <nav class='navbar'>
        <div class='navbar_logo'>
          <a href='/'>
            <strong className='logo'>//</strong> GADAMGADAM
          </a>
        </div>
        <ul class='navbar_mypage'>
          <li><NavLink to='/login'>LOGIN/JOIN</NavLink></li>
          <li><NavLink to='/mypage'><FontAwesome name='user' size='2x' /></NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path='/login'><Login /></Route>
        <Route path='/mypage'><MyPage /></Route>
      </Switch>
    </div>
  )
}

export default Header
