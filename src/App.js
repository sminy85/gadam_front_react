import React from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './component/MainPage'
import FindCrew from './component/FindCrew'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div class='main_control_btn'>
          <NavLink className='main_control' exact to="/" href="/">HOME</NavLink>
          <NavLink className='main_control' to="/findcrew">FIND CREW</NavLink>
        </div>
        <Switch>
          <Route exact path="/"><MainPage></MainPage></Route>
          <Route path="/findcrew"><FindCrew></FindCrew></Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
