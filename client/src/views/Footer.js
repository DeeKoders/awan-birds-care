import React from 'react'

function Footer() {
  return (
    <footer className='footer py-2 mx-2 container-fluid mt-auto bg-dark text-white'>
      <ul className='nav justify-content-center border-bottom '>
        <li className='nav-item'>
          <a href='/' className='nav-link px-3 text-white '>
            Information
          </a>
        </li>
        <div className='vr bg-white border border-1 border-white'></div>

        <li className='nav-item'>
          <a href='/' className='nav-link px-3 text-white '>
            Buy/Sell
          </a>
        </li>
        <div className='vr bg-white border border-1 border-white'></div>
        <li className='nav-item'>
          <a href='/' className='nav-link px-3  text-white'>
            Donations
          </a>
        </li>
        <div className='vr bg-white border border-1 border-white'></div>
        <li className='nav-item'>
          <a href='/' className='nav-link px-3 text-white'>
            About
          </a>
        </li>
      </ul>
      <p className='text-center text-white mt-2 mb-2'>
        Awan Birds Care © 2021 Company, Inc
      </p>
    </footer>
  )
}

export default Footer
