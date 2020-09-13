import React, { useState } from 'react'
import FontAwesome from 'react-fontawesome'
import '../css/style.css'
import '../css/base.css'
import Modal from './Modal'
import { NavLink } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slideImage1 from './images/blog-1.jpg'
import slideImage2 from './images/blog-2.jpg'
import slideImage3 from './images/blog-3.jpg'

function MainPage () {
  return (
    <div class='mainpage'>
      <div class='main_control_btn'>
        <NavLink className='main_control1' exact to='/'>HOME</NavLink>
        <NavLink className='main_control' to='/findcrew'>FIND CREW</NavLink>
      </div>
      <div class='main'>
        <div class='center_body2'>
          <NewComponent />
        </div>
      </div>
    </div>
  )
}

function NewComponent () {
  const [show, setShow] = useState(false)

  var showModal = e => {
    setShow(!this.state.show)
  }

  return (
    <div>
      <div>
        <div className="slide-container">
          <div class="todays-hot">
            <b><p>HOT CREW</p></b>
          </div>
          <Slide easing='ease'>
            <div className="each-slide">
              <NavLink  to='/detailinfo'><img className='slide_img' src={slideImage1} /></NavLink>
              {/*<div style={{ backgroundImage: slideImages[0] }}>
                <span>Slide 1</span>
              </div>*/}
            </div>
            <div className="each-slide">
              <NavLink  to='/detailinfo'><img className='slide_img' src={slideImage2} /></NavLink>
            </div>
            <div className="each-slide">
              <NavLink  to='/detailinfo'><img className='slide_img' src={slideImage3} /></NavLink>
              {/*<div style={{ backgroundImage: 'url(' + slideImages[0] + ')' }}>
                <span>Slide 3</span>
              </div>*/}
            </div>
          </Slide>
        </div>

        <div className="todays-crew">
          <div className="todays-crew-nav">
            {/* <span>오늘의 크루</span> */}
            <b><span>TODAY'S CREW</span></b>
            <span className="filter_btn" id="filter_btn">
              <button
                class='toggle-button'
                id='centered-toggle-button'
                onClick={function (e) {
                  e.preventDefault()
                  setShow(!show)
                }}>
                <FontAwesome name='filter' size='3x' />
              </button>
            </span>
          </div>

          <Modal onClose={showModal} show={show}>
            <div className="modal"> 
              <div className='content99'> 
              <span className="close-button" onClose={showModal}>×</span>
               <h4 className="con99">내 크루 찾기</h4> 
               
                <div className="filter_item">
                  <ul className="list">
                    <h4 className="sex_filter">성별</h4>
                    <li>
                      <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_m" defaultValue={1} />
                      <label htmlFor="sex_m" className="checkLabel">남성</label>
                    </li>
                    <li>
                      <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_w" defaultValue={-1} />
                      <label htmlFor="sex_w" className="checkLabel">여성</label>
                    </li>
                    <li>
                      <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_u" defaultValue={0} />
                      <label htmlFor="sex_u" className="checkLabel">무관</label>
                    </li>
                  </ul>
                  <ul className="list">
                    <h4 className="age_filter">나이</h4>
                    <li>
                      <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={4} />
                      <label htmlFor="type_match" className="checkLabel">10대</label>
                    </li>
                    <li>
                      <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={5} />
                      <label htmlFor="type_cup" className="checkLabel">20대</label>
                    </li>
                    <li>
                      <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={6} />
                      <label htmlFor="type_cup" className="checkLabel">30대</label>
                    </li>
                    <li>
                      <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={7} />
                      <label htmlFor="type_cup" className="checkLabel">40대</label>
                    </li>

                  </ul>
                </div>
                <input type="button" id="cancel" defaultValue="취소" />
                <input type="submit" id="submit" defaultValue="적용하기" />
              </div>
            </div>
          </Modal>
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
            <NavLink to='/detailinfo' className='joinbtn'><p>참여하기</p></NavLink>
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
            <NavLink to='/detailinfo' className='joinbtn'><p>참여하기</p></NavLink>
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
           <p  className='joindonebtn'>모집마감</p>
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
            <NavLink to='/detailinfo' className='joinfastbtn'><p>마감임박</p></NavLink>
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
            <NavLink to='/detailinfo' className='joinbtn'><p>참여하기</p></NavLink>
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
            <NavLink to='/detailinfo' className='joinbtn'><p>참여하기</p></NavLink>
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
            {/* <a className="joindonebtn" href='/'>모집마감</a> */}
            <p  className='joindonebtn'>모집마감</p>
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
            {/* <a className="joinfastbtn" href='/'>마감임박</a> */}
            <NavLink to='/detailinfo' className='joinfastbtn'><p>마감임박</p></NavLink>
          </div>
        </div>
      </div>
      <div className="stickybutton" style={{zIndex: 2}}>
        <NavLink to='/makecrew'>
          <p><b>크루모집</b></p>
          <span className="mainjoin" href='/'>나만의 크루를 모집해보세요!</span>
        </NavLink>
      </div>
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

export default MainPage
