import React from 'react'
import '../css/findid.css'
import { NavLink } from 'react-router-dom'

function FindPw () {
  return (
    <div className="center_body6">
      <div className="main">
        <div className="title-fip">
          <b>비밀번호 찾기</b>
        </div>
        <div className="table-sec">
          <form action method="post">   
            <table>
              <tbody><tr><td>이름</td>
                <td><input type="text" id="name" name="name" /></td></tr>
               <tr><td>아이디</td>
                <td><input type="text" id="id" name="id" placeholder="예 ) gadam@naver.com" /></td></tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div className="id-done1">
        <li><NavLink to='/findpw-done' className="id-done2" >확인</NavLink></li>
      </div>
    </div>
  )
}
export default FindPw
