import React from 'react'
import '../css/join.css'
import '../css/fixinfo.css'
import { NavLink } from 'react-router-dom'

function FixInfo () {
  return (
    <div className="center_body6">
      <div className="main">
      <h2 id="fixinfo">회원정보 수정</h2><br />
        <form action method="post">
                 <table>
            <tbody><tr><td>이름</td>
                <td><input type="text" id="name" name="name" /></td></tr>
              <tr><td>아이디</td>
                <td><input type="text" id="id" name="id" placeholder="예 : gadam@naver.com" /></td></tr>
              <tr><td>비밀번호</td>
                <td><input type="text" id="pw" name="pw" /></td></tr>
              <tr><td>비밀번호 확인</td>
                <td><input type="text" id="pw_check" name="pw_check" /></td></tr>
              <tr><td>닉네임</td>
                <td><input type="text" id="nickname" name="nickname" /></td></tr>
              <tr><td>연령대</td>
                <td><select name="age">
                    <option value={1} selected>10대</option>
                    <option value={2}>20대</option>
                    <option value={3}>30대</option>
                    <option value={3}>40대</option>
                    <option value={3}>50대 이상</option>
                  </select>
                </td></tr>
              <tr><td>성별</td>
                <td><select name="gender">
                    <option value={1} selected>여성</option>
                    <option value={2}>남성</option>
                    <option value={3}>성별 무관</option>
                  </select>
                </td></tr>
              <tr><td>전화번호</td>
                <td><input type="text" size={11} id="num" placeholder="ex)01012341234" name="num" /></td></tr>
            </tbody></table>
            <div className="fixinfo_btn">
                  <NavLink to='/mypage' className="yes"><input type="submit" value="수정하기" /></NavLink>
                  <NavLink to='/mypage' className="no" ><input type="submit" value="취소하기" /></NavLink>
              </div>
        </form>
      </div>
    </div>
  )
}

export default FixInfo
