import React from 'react'
import '../css/crewlist.css'
import '../css/base.css'

function CrewList () {
  return (
    <div className='crewlist_body'>
      <section className='crewlist2'>
        <p className='findcrew-title'><b id='hiking-t'>등산</b>크루를 찾고 계신가요?</p>
        <div className='findcrew-q'>
          <input type='text' palceholder='크루 검색' />
          <button className='findcrew_btn'>검색</button>
        </div>
        <div className='date_q'><p className='date-q'>날짜</p>
          <p className='datepick-q'><input type='date' /></p>
        </div>
        {/* <hr /> */}
        <div className='time-filter'>
          <ul className='time-filter-btn'>
            <li><a href='/'>전체</a></li>
            <li><a href='/'>7:00</a></li>
            <li><a href='/'>8:00</a></li>
            <li><a href='/'>9:00</a></li>
            <li><a href='/'>10:00</a></li>
            <li><a href='/'>11:00</a></li>
            <li><a href='/'>12:00</a></li>
            <li><a href='/'>13:00</a></li>
            <li><a href='/'>14:00</a></li>
            <li><a href='/'>15:00</a></li>
            <li><a href='/'>16:00</a></li>
            <li><a href='/'>17:00</a></li>
            <li><a href='/'>18:00</a></li>
            <li><a href='/'>19:00</a></li>
            <li><a href='/'>20:00</a></li>
            <li><a href='/'>21:00</a></li>
            <li><a href='/'>22:00</a></li>
          </ul>
        </div>
        {/* <hr /> */}
        <div className='region-filter'>
          <ul className='region-filter-btn'>
            <li>
              <a href='/'>전체</a>
            </li>
            <li>
              <a href='/'>서울</a>
            </li>
            <li>
              <a href='/'>경기</a>
            </li>
            <li>
              <a href='/'>인천</a>
            </li>
            <li>
              <a href='/'>대전</a>
            </li>
            <li>
              <a href='/'>충북</a>
            </li>
            <li>
              <a href='/'>광주</a>
            </li>
            <li>
              <a href='/'>대구</a>
            </li>
            <li>
              <a href='/'>울산</a>
            </li>
            <li>
              <a href='/'>부산</a>
            </li>
          </ul>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 9:00 </li>
          <div className="info">
            <span className="title">등산 크루</span>
            <span className="hashtags">
              <li>#여자</li>
              <li>#등산</li>
              <li>#서울</li>
            </span>
          </div>
          <a href='/' className="joinbtn">참여하기</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 11:00 </li>
          <div className="info">
            <span className="title">러닝 크루</span>
            <span className="hashtags">
              <li>#남자</li>
              <li>#오전</li>
              <li>#서울</li>
            </span>
          </div>
          <a className="joinbtn" href='/'>참여하기</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 15:00 </li>
          <div className="info">
            <span className="title">사이클 크루</span>
            <span className="hashtags">
              <li>#무관</li>
              <li>#사이클</li>
              <li>#서울</li>
            </span>
          </div>
          <a className="joindonebtn" href='/'>모집마감</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 17:00 </li>
          <div className="info">
            <span className="title">한강러닝 크루</span>
            <span className="hashtags">
              <li>#남자</li>
              <li>#러닝</li>
              <li>#대전</li>
            </span>
          </div>
          <a className="joinfastbtn" href='/'>마감임박</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 18:00 </li>
          <div className="info">
            <span className="title">탁구 크루</span>
            <span className="hashtags">
              <li>#무관</li>
              <li>#탁구</li>
              <li>#대전</li>
            </span>
          </div>
          <a className="joinbtn" href='/'>참여하기</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 19:00 </li>
          <div className="info">
            <span className="title">배드민턴크루</span>
            <span className="hashtags">
              <li>#남자</li>
              <li>#오후</li>
              <li>#부산</li>
            </span>
          </div>
          <a className="joinbtn" href='/'>참여하기</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 20:00 </li>
          <div className="info">
            <span className="title">탁구 크루</span>
            <span className="hashtags">
              <li>#무관</li>
              <li>#탁구</li>
              <li>#부천</li>
            </span>
          </div>
          <a className="joindonebtn" href='/'>모집마감</a>
        </div>
        <div className="todays-crew-info">
          <li className="time"> 22:00 </li>
          <div className="info">
            <span className="title">밤수영 크루</span>
            <span className="hashtags">
              <li>#남자</li>
              <li>#수영</li>
              <li>#인천</li>
            </span>
          </div>
          <a className="joinfastbtn" href='/'>마감임박</a>
        </div>
      </section>
      <div className="main-paging">
        <div className="todayscrew-paging">
          <a className="prev" href='/'>&lt;</a>
          <a href='/' className="checknum">1</a>
          <a href='/'>2</a>
          <a href='/'>3</a>
          <a href='/'>4</a>
          <a href='/'>5</a>
          <a className='next' href='/'>&gt;</a>
        </div>
      </div>
    </div>
  )
}

export default CrewList
