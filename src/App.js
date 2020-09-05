import React from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './component/MainPage'
import FindCrew from './component/FindCrew'
import MakeCrew from './component/MakeCrew'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailInfo from './component/DetailInfo'
import FindIdPw from './component/FindIdPw'
import Join from './component/Join'
import FindId from './component/FindId'
import FindPw from './component/FindPw'
import FindPwDone from './component/FindPwDone'
import FindIdDone from './component/FindIdDone'
import CheckPw from './component/CheckPw'
import FixInfo from './component/FixInfo'
import EctCrew from './component/EctCrew'
import AddSports from './component/AddSports'
import Message from './component/Message'
import ChatRoom from './component/ChatRoom'
import CrewSetting from './component/CrewSetting'
import WriteReview from './component/WriteReview'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'><MainPage /></Route>
          <Route path='/findcrew'><FindCrew /></Route>
          <Route path='/makecrew'><MakeCrew /></Route>
          <Route path='/detailinfo'><DetailInfo /></Route>
          <Route path='/findidpw'><FindIdPw /></Route>
          <Route path='/join'><Join /></Route>
          <Route path='/findid'><FindId /></Route>
          <Route path='/findpw'><FindPw /></Route>
          <Route path='/findid-done'><FindIdDone /></Route>
          <Route path='/findpw-done'><FindPwDone /></Route>
          <Route path='/checkpw'><CheckPw /></Route>
          <Route path='/fixinfo'><FixInfo /></Route>
          <Route path='/ectcrew'><EctCrew /></Route>
          <Route path='/addsports'><AddSports /></Route>
          <Route path='/message'><Message /></Route>
          <Route path='/chatroom'><ChatRoom /></Route>
          <Route path='/writereview'><WriteReview /></Route>
          <Route path='/crewsetting'><CrewSetting /></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
