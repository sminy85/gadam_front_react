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
        <Switch>
          <Route exact path='/'><MainPage /></Route>
          <Route path='/findcrew'><FindCrew /></Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
