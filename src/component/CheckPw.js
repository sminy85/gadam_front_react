import React from 'react'
import '../css/checkpw.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function CheckPw() {
  return (
    <div>
      <div className="center_body6">
        <div className='main'>
          <label htmlFor="pass"> 
            <b className="check"> 비밀번호 확인</b>
          </label>
          <br />
          <div className="checkpw">
            <input id="pass-c" type="password" size={15} defaultValue />
            <div className="check_btn">
              <li><NavLink to='/fixinfo' id="yes" >확인</NavLink></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CheckPw;
