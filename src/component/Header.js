import React from 'react'
import FontAwesome from 'react-fontawesome'

function Header () {
  return (
    <div>
      <nav class='navbar'>
        <div class='navbar_logo'>
          <a href="/">
            <FontAwesome icon='faCoffee' size='2x' />
            ADAM GADAM
          </a>
        </div>

        <ul class="navbar_mypage">
          <li><a href="/">LOGIN/JOIN</a></li>
          <li><a href="/"><FontAwesome name='user' size='2x' /></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
