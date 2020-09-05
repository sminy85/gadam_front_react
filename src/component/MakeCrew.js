import React from 'react'
import '../css/makecrew.css'
import { NavLink } from 'react-router-dom'

function MakeCrew () {
  return (
    <div>
      <div className="crew_body4">
        <div className="makecrew">
          <form class='makecrewform'>
            <h1 className="make-crew">크루 모집하기</h1><br />
            <table>
              <tbody>
                <tr><td>크루명</td>
                  <td><input className='makecrew_input' type='text' id="crewid" name="crewid" /></td>
                </tr>
                <tr><td>운동종목</td>
                  <td>
                    <select name="sports">
                      <option value="-" />
                      <option value="golf">골프</option>
                      <option value="walkdog">강아지 산책</option>
                      <option value="basketball">농구</option>
                      <option value="hiking">등산</option>
                      <option value="running">러닝</option>
                      <option value="cycle">사이클</option>
                      <option value="soccer">축구</option>
                      <option value="tennis">테니스</option>
                      <option value="ect">기타</option>
                    </select>
                  </td>
                </tr>
                <tr><td>날짜</td>
                  <td><input type="date" defaultValue /></td></tr>
                <tr><td>시간</td>
                  <td><input type="time" defaultValue="07:00:00" min="07:00:00" max="22:00:00" /></td></tr>
                <tr><td>장소</td>
                  <td><input className='makecrew_input' type='text' id="crewplace" name="crewplace" /></td></tr>
                <tr><td>인원수</td>
                  <td><input type="number" min={0} max={20} step={1} /><br /><br /></td></tr>
                <tr><td>성별</td>
                  <td><select name="gender">
                    <option value={1} selected>여성</option>
                    <option value={2}>남성</option>
                    <option value={3}>성별 무관</option>
                  </select>
                  </td></tr>
                <tr><td>연령대</td>
                  <td><select name="age">
                    <option value={1} selected>10대</option>
                    <option value={2}>20대</option>
                    <option value={3}>30대</option>
                    <option value={3}>40대</option>
                    <option value={3}>50대 이상</option>
                  </select>
                  </td></tr>
                <tr><td>소개</td>
                  <td><textarea cols={50} rows={5} defaultValue={"이곳에 내용 작성"} /></td></tr>
                <tr><td>첨부파일</td>
                  <td><input type="file" name="FileName" /></td></tr>
                <tr><td /><td>
                    {/* 나중에는 이 코드 써서 내용 보내야할둡.. 일단 페이지연결이 안되길래
        밑에 버튼으로 하나 더 만들어놧서ㅜㅜㅜ
        <form action="opened.html">
            <input type="submit" value="개설완료">
        </form>
        */}
                  <NavLink id='donebtn' to='/mypage'>개설완료</NavLink>
                </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MakeCrew
