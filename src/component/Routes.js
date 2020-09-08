import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'
import MainPage from './MainPage'
import FindCrew from './FindCrew'
import DetailInfo from './DetailInfo'
import Join from './Join'
import FindId from './FindId'
import FindPw from './FindPw'
import FindIdDone from './FindIdDone'
import FindPwDone from './FindPwDone'
import CheckPw from './CheckPw'
import FixInfo from './FixInfo'
import EctCrew from './EctCrew'
import AddSports from './AddSports'
import Message from './Message'
import ChatRoom from './ChatRoom'
import WriteReview from './WriteReview'
import CrewSetting from './CrewSetting'
import CrewList from './CrewList'

export default () => (
  <Router>
    <Route path='/login' component={Login} />
    <Route path='/mypage' component={MyPage} />
    <Route path='/' component={MainPage} />
    <Route path='/findcrew' component={FindCrew} />
    <Route path='/detailinfo' component={DetailInfo} />
    <Route path='/join' component={Join} />
    <Route path='/findid' component={FindId} />
    <Route path='/findpw' component={FindPw} />
    <Route path='/findid-done' component={FindIdDone} />
    <Route path='/findpw-done' component={FindPwDone} />
    <Route path='/checkpw' component={CheckPw} />
    <Route path='/fixinfo' component={FixInfo} />
    <Route path='/ectcrew' component={EctCrew} />
    <Route path='/addsports' component={AddSports} />
    <Route path='/message' component={Message} />
    <Route path='/chatroom' component={ChatRoom} />
    <Route path='/writereview' component={WriteReview} />
    <Route path='/crewsetting' component={CrewSetting} />
    <Route path='/crewlist' component={CrewList} />
  </Router>
)
