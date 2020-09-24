import React from 'react'
import '../css/login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function login (e) {
  e.preventDefault();
  const request = {
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:3000/login', request)
    .then(resp => {
      alert(resp.data.message);
    })
    .catch(err => {
      console.log(err);
    })
}

function Login () {
  return (
    <div className='login_body'>
      <NewComponent3 />
    </div>
  )
}

function NewComponent3 () {
  return (
    <div className="main">
      <b><p className="logintitle">Login</p></b>
      <form name="fo" className="login_form" method="get" onSubmit={(e) => login(e)}>
        <div className="loginfo_id">
          <label for='exampleInputEmail1'><b><p id="un">Username</p></b></label>
          <input type="text" size={20} id='exampleInputEmail1' />
        </div>
        <div className="loginfo_pw">
          <label for='exampleInputPassword1'><b><p id="pw" >Password</p></b></label>
          <input id='exampleInputPassword1' type="password" size={20} defaultValue />
        </div>
        <div className="login_btn">
          <input type="submit" Value="LOG IN" />
        </div>
        <div className="loginfo_bottom">
          <div className='storedId'>
            <input classname="remember_id" type="checkbox"/>
            <p>아이디 저장</p>
          </div>
          <li><NavLink to='/findidpw'>아이디/비밀번호 찾기</NavLink></li>
        </div>
        <br />
        <div className='gojoin-gadam'>
          <p id="notyet">아직 가담가담 회원이 아니신가요?</p>
          <li><NavLink id='go_to_join' to='/join'>회원가입 바로가기</NavLink></li>
        </div>
      </form>
      <hr />
      <h1 className="loginsubtitle">SNS LOG IN</h1>
      <div className="snslogin_btn">
        <a id="custom-login-btn" href="javascript:loginWithKakao()">
          <img width={222} src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" />
        </a>
        <p id="token-result" />
      </div>
    </div>
  )
}

export default Login
