import React from 'react'
import '../css/base.css'
import { NavLink } from 'react-router-dom'

function Message () {
  return (
    <div className="center_body6">
      <li><NavLink to='/chatroom' id="myTable" >정모방</NavLink></li>
    </div>
  )
}
export default Message
