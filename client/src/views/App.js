import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Navbar from '../navbar'
import '../index.css'
import AnimatedRoutes from './AnimatedRoutes'
import Footer from './Footer'

function App() {
  const user = localStorage.getItem('token')
  console.log(user)

  return (
    <div className='container-fluid font-family-sans-serif '>
      <div className='main'>
        <Router>
          <Navbar data={user} />
          <hr />
          <AnimatedRoutes />
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
