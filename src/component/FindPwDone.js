import React from 'react'
import '../css/find_idpw_done.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function FindPwDone () {
  return (
    <div className="center_body6">
      <div className="main">
        <div className="title-fip">
          <b>비밀번호 찾기</b>
        </div>
        <div className="here-idpw">   
          <li id="word">비밀번호 : <b /></li>
          <li id="pw">s9dfjhs9</li>
        </div>
      </div>
      <div className="done1">
        <li><NavLink to='/login' className="done2" >로그인 하기</NavLink></li>
      </div>
    </div>
  )
}
export default FindPwDone
