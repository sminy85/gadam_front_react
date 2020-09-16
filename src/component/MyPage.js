import React, { useState } from 'react'
import '../css/mypage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

function MyPage () {
  return (
    <div>
      <div className='mypage'>
        <NewComponent4 />
      </div>
    </div>
  )
}

library.add(
  faComment
  // more icons go here
)

function getModalStyle () {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    marginRight: '20px',
    marginLeft: '40px'
  }
}));

function NewComponent4 () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">일정 취소</h2>
      <p id="simple-modal-description">
        정말로 일정을 취소하시겠습니까?
        취소규정 확인 필수
      </p>
      <div className={classes.alignCont}>
        <Button onClick={handleClose} className={classes.margin} variant="outlined">네, 취소합니다</Button>
        <Button onClick={handleClose} color="secondary" variant="outlined">아니요</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

      <div className="headline">
        <h1 className='title-m'>MY PAGE</h1>
        <li><NavLink to='/message' id='message'><FontAwesomeIcon id='message' icon={['fa', 'comment']} size='2x' /></NavLink></li>
        <div className="idfix">
          <li><NavLink to='/checkpw' id='idfix'>회원정보수정</NavLink></li>
        </div>
      </div>
      <div className="preview">
        <h3 className="subtitle">나의 운동 일정</h3>
        <ul className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" >도봉구 도봉산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place" >도봉산 입구 매점</li>
            <li>
              <Button onClick={handleOpen} id='deletebtn' style={{ flexGrow: 3 }}>
              일정 취소
              </Button>
            </li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >도봉구 도봉산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place" >도봉산 입구 매점</li>
            <li>
              <Button onClick={handleOpen} id='deletebtn' style={{ flexGrow: 3 }}>
              일정 취소
              </Button>
            </li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >안양천 러닝</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li>
              <Button onClick={handleOpen} id='deletebtn' style={{ flexGrow: 3 }}>
              일정 취소
              </Button>
            </li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >도봉구 도봉산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li>
              <Button onClick={handleOpen} id='deletebtn' style={{ flexGrow: 3 }}>
              일정 취소
              </Button>
            </li>
          </div>
        </ul>
      </div>

      <hr />
      <div className="preview">
        <h3 className="subtitle">지난 크루 리뷰</h3>
        <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" >강남 무빙센터 클라이밍</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/writereview' id='reviewbtn'>후기 작성하기</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >미아사거리역 볼링</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/writereview' id='reviewbtn'>후기 작성하기</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >한강 러닝</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/writereview' id='reviewbtn'>후기 작성하기</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >관악산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/writereview' id='reviewbtn'>후기 작성하기</NavLink></li>
          </div>
        </div>
      </div>
      <hr />
      <div className="preview">
        <h3 className="subtitle">내가 개설한 크루</h3>
        <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" >양천공원 농구</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/crewsetting' id='setting'>관리</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >북한산 둘레길 걷기</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/crewsetting' id='setting'>관리</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >덕성여대 사이클</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/crewsetting' id='setting'>관리</NavLink></li>
          </div>
          <div className="boxx">
            <h3 id="crewtitle" >도봉구 도봉산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/crewsetting' id='setting'>관리</NavLink></li>
          </div>
        </div>
      </div>
      <hr />
      <div className="preview">
        <h3 className="subtitle">내가 찜한 크루</h3>
        <div className="box-slide">
          <div className="boxx">
            <h3 id="crewtitle" >도봉구 도봉산 등산 </h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/detailinfo' id='detaillbtn'>상세정보</NavLink></li>
          </div>
          <div className='boxx'>
            <h3 id="crewtitle" >한강 러닝</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/detailinfo' id='detaillbtn'>상세정보</NavLink></li>
          </div>
          <div className='boxx'>
            <h3 id="crewtitle" >강서구 탁구</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/detailinfo' id='detaillbtn'>상세정보</NavLink></li>
          </div>
          <div className='boxx'>
            <h3 id="crewtitle" >도봉구 도봉산 등산</h3>
            <li id="date-time">2020년 8월 7일 18:00</li>
            <li id="place">도봉산 입구 매점</li>
            <li><NavLink to='/detailinfo' id='detaillbtn'>상세정보</NavLink></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage
