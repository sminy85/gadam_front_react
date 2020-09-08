import React from 'react'
import '../css/addsports.css'
import '../css/base.css'

function AddSports () {
  return (
    <div className='center_bodyAS'>
      <p className='want-title'><b>크루 종목 추가하기</b></p>
      <form className='addsports' action method>
        <div>
          <input type='text' id='addsports' name='addsports' />
        </div>
        <div className='button-addsport'>
          <button type='submit' id='addsportsbtn'>추가하기</button>
          {/* <li><NavLink to='/ectcrew' id="addsportsbtn" >추가하기</NavLink></li> */}
        </div>
      </form>
    </div>
  )
}

export default AddSports
