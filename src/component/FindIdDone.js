import React from 'react'
import '../css/find_idpw_done.css'
import { NavLink } from 'react-router-dom'

function FindIdDone () {
  return (
    <div className="center_body6">
      <div className="main">
        <div className="title-fip">
          <b>아이디 찾기</b>
        </div>
        <div className="here-idpw">   
          <li id="word">아이디 : <b /></li>
          <li id="idpw">jagosopda@lala.com</li>
        </div>
      </div>
      <div className="done1">
        <li><NavLink to='/login' className="done2" >로그인 하기</NavLink></li>
      </div>
    </div>
  )
}

export default FindIdDone
