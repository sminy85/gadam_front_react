import React from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './component/MainPage'
import {BrowserRouter} from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
