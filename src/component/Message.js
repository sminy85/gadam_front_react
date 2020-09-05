import React from 'react'

import '../css/base.css'
import { NavLink } from 'react-router-dom'

function Message() {
  return (
    <div className="message">

<li><NavLink to='/chatroom' id="myTable" >정모방</NavLink></li> 

        {/* <table id="myTable">
          <tbody><tr>
              <th style={{flexGrow: 3, textAlign: 'center'}}>Crew</th>
              <th style={{flexGrow: 7, textAlign: 'center'}}>Name</th>
            </tr>
            <tr>
              <td style={{flexGrow: 3}}><a href="chatroom.html">도봉구 도봉산 등산</a></td>
              <td style={{flexGrow: 7}}><a href="chatroom.html">Berglunds snabbkop</a></td>
            </tr>
            <tr>
              <td style={{flexGrow: 3}}><a href="chatroomVer2.html">마포대교 러닝크루</a></td>
              <td style={{flexGrow: 7}}><a href="chatroomVer2.html">North/South</a></td>
            </tr>
          </tbody></table> */}
      </div>

  )
}
export default Message;
