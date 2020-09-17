import React from 'react'
import '../css/writereview.css'
import { NavLink } from 'react-router-dom'

function WriteReview () {
  return (
    <div className='writereview'>
      <h1 id='review'>REVIEW</h1>
    <div className="reviewpage">
      <form className='ratingform'>
        <label>
          <div className='crew_name'><h3>도봉구 도봉산 산악회</h3></div>
        </label>
        <label>
          <div className='rating'>
            <input type='radio' name='rating' id='rating-5' />
            <label htmlFor='rating-5' />
            <input type='radio' name='rating' id='rating-4' />
            <label htmlFor='rating-4' />
            <input type='radio' name='rating' id='rating-3' />
            <label htmlFor='rating-3' />
            <input type='radio' name='rating' id='rating-2' />
            <label htmlFor='rating-2' />
            <input type='radio' name='rating' id='rating-1' />
            <label htmlFor='rating-1' />
          </div>
        </label>
        <label>
          <textarea className='reviewTextArea' cols={80} rows={10} placeholder="리뷰를 남겨주세요!" defaultValue='' />
        </label>
        <label>
          {/* <span /><input type="submit" defaultValue="작성완료" /> */}
          <li className='review_submit'><NavLink to='/mypage'>작성완료</NavLink></li>
        </label>
      </form>
    </div></div>
  )
}
export default WriteReview
