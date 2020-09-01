import React, { useState } from 'react'
import '../css/mypage.css'
import '../css/base.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComment
} from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

library.add(
  faComment
  // more icons go here
)

function MyPage () {
  return (
    <div style={{ display: 'block' }}>
      <div className='mypage'>
        <NewComponent4 />
      </div>
    </div>
  )
}

function NewComponent4 () {
  const [show, setShow] = useState(false)

  var showModal = e => {
    setShow(!this.state.show)
  }
  return (
    <div>
      <div className="headline">
        <h1 className="title">MY PAGE</h1>
        <a href='/'><FontAwesomeIcon id='message' icon={['fa', 'comment']} size='2x' /></a>
        <div className="idfix">
          <b><a id="idfix" href="checkpw.html">회원정보수정</a></b>
        </div>
      </div>
      <div className="preview">
        <h3 className="subtitle">나의 운동 일정</h3>
        <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a href='/' id="deletebtn" style={{flexGrow: 3}}>일정 취소</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a href='/' id="deletebtn" style={{flexGrow: 3}}>일정 취소</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>안양천 러닝</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="deletebtn" style={{flexGrow: 3}} href='/'>일정 취소</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="deletebtn" style={{flexGrow: 3}} href='/'>
              <button
                style={{borderStyle: 'none', backgroundColor: '#ffff8b'}}
                class='toggle-button' id='centered-toggle-button'
                onClick={function (e) {
                  e.preventDefault()
                  setShow(!show)
                }}
              >
              일정 취소
              </button>
            </a>
          </div>
        </div>
        <Modal onClose={showModal} show={show}>
          <div className="modal"> 
            <div className="content">
              일정 취소
              <span className="close-button">×</span>
            </div>
            <div className="modal-body">
              <p>정말로 일정을 취소하시겠습니까?</p>
              <p className="text-secondary"><small>취소 규정 확인 필수</small></p>
            </div>
            <div className="modal-footer">
              <input id="cancel" type="button" defaultValue="네,취소할래요" />
              <input id="submit" type="submit" defaultValue="아니요!" />
            </div>
          </div>
        </Modal>
        <div>
          <a id="show" onclick="if(hide.style.display=='none') 
{hide.style.display='';show.innerText='▲접기'} else {hide.style.display='none';show.innerText='▶더보기'}" href='#none'>▶더보기</a>
          <div id="hide" style={{display: 'none'}}>
            <div className="box-slide">
              <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="deletebtn" style={{flexGrow: 3}} onclick="confirmCancle()" href='/'>일정 취소</a>
              </div>
              <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="deletebtn" style={{flexGrow: 3}} onclick="confirmCancle()" href='/'>일정 취소</a>
              </div>
              <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>안양천 러닝</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="deletebtn" style={{flexGrow: 3}} onclick="confirmCancle()" href='/'>일정 취소</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="preview">
        <h3 className="subtitle">지난 크루 리뷰</h3>
        <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>강남 무빙센터 클라이밍</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>미아사거리역 볼링</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>한강 러닝</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>관악산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
          </div>
        </div>
        <div>
          <a id="show2" onclick="if(hide2.style.display=='none') 
{hide2.style.display='';show2.innerText='▲접기'} else {hide2.style.display='none';show2.innerText='▶더보기'}" href='#none'>▶더보기</a>
          <div id="hide2" style={{display: 'none'}}>
            <div className="box-slide">
              <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>강남 무빙센터 클라이밍</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
              </div>
              <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>미아사거리역 볼링</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>한강 러닝</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>관악산 등산</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="reviewbtn" style={{flexGrow: 3}} href='/'>후기 작성하기</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    <hr />
    <div className="preview">
        <h3 className="subtitle">내가 개설한 크루</h3>
        <div className="box-slide">
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>양천공원 농구</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
        </div>
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>북한산 둘레길 걷기</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
        </div>
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>덕성여대 사이클</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
        </div>
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
        </div>
        </div>
        <div>
        <a id="show3" onclick="if(hide3.style.display=='none') 
{hide3.style.display='';show3.innerText='▲접기'} else {hide3.style.display='none';show3.innerText='▶더보기'}" href="#none">▶더보기</a>
        <div id="hide3" style={{display: 'none'}}>
            <div className="box-slide">
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>양천공원 농구</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>북한산 둘레길 걷기</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="setting" style={{flexGrow: 3}} href="crewsetting.html">관리</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    <hr />
        <div className="preview">
          <h3 className="subtitle">내가 찜한 크루</h3>
          <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산 </h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>한강 러닝</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
          </div>
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>강서구 탁구</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
        </div>
        <div className="boxx">
            <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
            <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
            <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
            <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
        </div>
        </div>
        <div>
        <a id="show4" onclick="if(hide4.style.display=='none') 
{hide4.style.display='';show4.innerText='▲접기'} else {hide4.style.display='none';show4.innerText='▶더보기'}" href="#none">▶더보기</a>
        <div id="hide4" style={{display: 'none'}}>
            <div className="box-slide">
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산 </h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>한강 러닝</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>강서구 탁구</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
            </div></div><br />
            <div className="box-slide">
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>강서구 탁구</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
            </div>
            <div className="boxx">
                <h3 id="crewtitle" style={{flexGrow: 3}}>도봉구 도봉산 등산</h3>
                <p id="date-time" style={{flexGrow: 2}}>2020년 8월 7일 18:00</p>
                <p id="place" style={{flexGrow: 2}}>도봉산 입구 매점</p>
                <a id="detaillbtn" style={{flexGrow: 3}} href="detailinfo.html">상세정보</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage;
