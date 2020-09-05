import React from 'react'
import '../css/findidpw.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function FindIdPw () {
  return (
    <div>
    <div className="center_body">
      <div className="title">
        <b>아이디 / 비밀번호 찾기</b>
      </div> 
      <div className="findbtn">
      <li><NavLink to='/findid' id="gofindid">아이디 찾기</NavLink></li>
      <li><NavLink to='/findpw' id="gofindpw">비밀번호 찾기</NavLink></li>
      </div></div>
  </div>
  )
}
export default FindIdPw
