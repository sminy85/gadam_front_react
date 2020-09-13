import React from 'react'
import '../css/detailinfo.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slideImage4 from './images/blog-4.jpg'
import slideImage5 from './images/blog-5.jpg'
import slideImage6 from './images/blog-6.jpg'

function DetailInfo ({ crewname }) {
  return (
    <div class="detailinfo">
      <div className="slide_crewimg">
        <Slide easing='ease'>
          <div className="each-slide">
            <img className='slide_img' src={slideImage4} />
          </div>
          <div className="each-slide">
            <img className='slide_img' src={slideImage5} />
          </div>
          <div className="each-slide">
            <img className='slide_img' src={slideImage6} />
          </div>
        </Slide>
      </div>
      <div className="crew_info">
        <div className="crew-box">
          <div className="crew_title">
            <h2 title="크루명"><span>{crewname}</span> 등산 크루에 오신걸 환영합니다.</h2>
            <br />
          </div>
          <div className="choose">
            <div className="radio-wrap">
              <input id="pick_u" type="radio" defaultValue="like" />
              <label className="checkLabel" htmlFor="pick_u">찜하기</label>
            </div>
            <div className="joinyes">
              <input id="joiny" type="submit" defaultValue="참여하기" />
            </div>
          </div>
        </div>
        <br />
        <div className="date-detail">
          <h3 className="detail">날짜</h3>
          <br />
          <h5 className="content"> 2020 / 07 / 01 / 수요일</h5>
        </div>
        <br />
        <div className="start-end-time">
          <h3 className="detail">시작 / 종료 시간</h3>
          <br />
          <h5 className="content"> 10:00 - 12:30</h5>
        </div>
        <br />
        <div className="place-detail">
          <h3 className="detail">장소</h3>
          <br />
          <h5 className="content"> 도봉산 입구</h5>
        </div>
        <br />
        <div className="detail-detail">
          <h3 className="detail">준비물</h3>
          <br />
          <h5 className="content"> 개인 도시락, 물, 등산화 등</h5>
        </div>
        <br />
        <div className="crewking-detail">
          <h3 className="detail">크루장 소개</h3>
          <br />
          <div className="crew_captin">
            <div className="crew_captin_contact">
              <img width={200} height={200} src="images/person1.jpg" />
              <button className="contact_btn" onclick="openForm()">메세지 보내기</button>
            </div>
            <h5 className="content2"> 안녕하세유 크루장 덕새임니당어쩌구저쩌궁~~</h5>
          </div>
        </div>
        <br />
        <h3 className="detail">리뷰
          <select className="review_classifi">
            <option value={1} selected>전체보기</option>
            <option value={2}>최신순</option>
            <option value={3}>평점순</option>
          </select>
        </h3>
        <h5 className="content">
          <div className="review-box" >
            <div className="id">gadami@naver.com</div>
            <div className="review">짱이에요 오예</div>
          </div>
          <div className="review-box">
            <div className="id">gadamon@daum.com</div>
            <div className="review">별로에요 우우</div>
          </div>
        </h5>
        <br />
      </div>
    </div>
  )
}

export default DetailInfo
