import React from 'react'
import FontAwesome from 'react-fontawesome'
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
            <FontAwesomeIcon icon={['fa', 'child']} size='2x' />
            ADAM GADAM
          </a>
        </div>
        <ul class='navbar_mypage'>
          <NavLink to='/login'>LOGIN/JOIN</NavLink>
          <NavLink to='/mypage'><FontAwesome name='user' size='2x' /></NavLink>
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
