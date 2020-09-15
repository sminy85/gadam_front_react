import React from 'react'
import '../css/chatroom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleUp,
  faUser
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faArrowCircleUp
  // more icons go here
)

function ChatRoom () {
  return (
      <div className='center_body6'>
          <div className="header_cr">
            <h3>도봉구 도봉산 등산</h3>
          </div>
          <div className="container">
          <div className="opponent">
            <p><FontAwesomeIcon icon={['fa', 'user']} size='2x' /></p>
              크루장덕새
            </div>
              <p>안녕하세요~ 등산 크루에 오신걸 환영합니다.</p>
              <span className="time-right">11:00</span>
          </div>
          <div className="container darker">
            <p>안녕하세요^^</p>
            <span className="time-left">11:01</span>
          </div>
          <div className="container">
            <div className="opponent">
            <p><FontAwesomeIcon icon={['fa', 'user']} size='2x' /></p>
              크루장덕새
            </div>
              <p>궁금하신게 있으시면 언제든 말씀해주세요^^</p>
              <span className="time-right">11:02</span>
          </div>
          <div className="container darker" id="myChat">
            <p>만나는 장소가 정확히 어디인가요?</p>
            <span className="time-left">11:05</span>
          </div>
          <div id="demo" />
          <div className="typeBox">
            <input id="inputBox" type="text" placeholder="메세지를 입력하세요" />
            <FontAwesomeIcon icon={['fa', 'arrow-circle-up']} size='2x' onclick="myFunction()" />
          </div>
        </div>
  )
}

export default ChatRoom
