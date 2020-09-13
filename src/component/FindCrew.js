import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/findcrew.css'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHiking,
  faGolfBall,
  faBasketballBall,
  faRunning,
  faBiking,
  faFutbol,
  faTableTennis,
  faPlus,
  faBowlingBall
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

library.add(
  faBasketballBall,
  faHiking,
  faGolfBall,
  faRunning,
  faBiking,
  faFutbol,
  faTableTennis,
  faPlus,
  faBowlingBall
  // more icons go here
)

function FindCrew () {
  return (
    <div>
      <div class='main_control_btn'>
        <NavLink className='main_control' exact to='/'>HOME</NavLink>
        <NavLink className='main_control1' to='/findcrew'>FIND CREW</NavLink>
      </div>
      <div class='center_body3'>
        <NewComponent2 />
      </div>
    </div>
  )
}

function NewComponent2 () {
  return (
    <div className='crewicon'>
      <table className='crewicon_table'>
        <tbody>
          <tr>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'golf-ball']} size='2x' />
                <i className="sportsname">골프</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'basketball-ball']} size='2x' />
                <i className="sportsname">농구</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'hiking']} size='2x' />
                <i className="sportsname">등산</i>
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'bowling-ball']} size='2x' />
                <i className="sportsname">러닝</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'bowling-ball']} size='2x' />
                <i className="sportsname">볼링</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'biking']} size='2x' />
                <i className="sportsname">사이클</i>
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'futbol']} size='2x' />
                <i className="sportsname">축구</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/crewlist'>
                <FontAwesomeIcon icon={['fa', 'table-tennis']} size='2x' />
                <i className="sportsname">테니스</i>
              </NavLink>
            </td>
            <td>
              <NavLink to='/ectcrew'>
                <FontAwesomeIcon icon={['fa', 'plus']} size='2x' />
                <i className="sportsname">기타</i>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FindCrew
