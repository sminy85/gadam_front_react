import React from 'react'
import '../css/base.css'
import { NavLink, Switch, Route, Router } from 'react-router-dom'
import FindCrew from './FindCrew'
import MainPage from './MainPage'

export default () => (
  <Router>
    <div class='main_control_btn'>
      <NavLink className='main_control' exact to='/'>HOME</NavLink>
      <NavLink className='main_control' to='/findcrew'>FIND CREW</NavLink>
    </div>
    <Switch>
      <Route exact path='/'><MainPage /></Route>
      <Route path='/findcrew'><FindCrew /></Route>
    </Switch>
  </Router>
)
