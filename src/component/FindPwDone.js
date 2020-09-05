import React from 'react'
import '../css/find_idpw_done.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function FindPwDone () {
  return (
    <div className="center_body">
    <div className="main">
      <form action method="post">
        <div className="title">
          <b>비밀번호 찾기</b>
        </div> 
        <p id="idpw">비밀번호 : </p>
      </form></div>
    <div className="done1">
      <li><NavLink to='/login' className="done2" >로그인 하기</NavLink></li>
    </div>
  </div>

  )
}
export default FindPwDone
