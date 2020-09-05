import React from 'react'
import '../css/findid.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function FindId () {
  return (
    <div className="center_body">
    <div className="main">
      <form action method="post">
        <div className="title">
          <b>아이디 찾기</b>
        </div> 
        <table>
          <tbody><tr><td>이름</td>
              <td><input type="text" id="name" name="name" /></td></tr>
            <tr><td>전화번호</td>
              <td><input type="text" size={11} id="num" placeholder="ex)01012341234" name="num" /></td></tr>
          </tbody></table>
      </form>
    </div>
    <div className="id-done1">
    <li><NavLink to='/findid-done' className="id-done2" >확인</NavLink></li>
    </div></div>
  )
}
export default FindId
