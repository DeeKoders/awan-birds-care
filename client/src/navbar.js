import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PeopleIcon } from '@primer/octicons-react'
import './index.css'
const Navbar = (props) => {
  let navigate = useNavigate()
  return (
    <div>
      <nav className='navbar navbar-scroll navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Awan Birds Care
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='text-white'></div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/BirdsInformation'>
                  Birds Information
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Donations'>
                  Donations
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Find My Bird
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Buy Sell
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                id='sear'
                placeholder='Search'
                aria-label='Search'
              />

              <button
                className='btn btn-outline-light mx-2'
                type='submit'
                onClick={() => {
                  var myText = document.getElementById('sear').value
                  navigate('/search/' + myText)
                }}
              >
                Search
              </button>
              {props.data !== 'null' ? (
                <div className='d-flex'>
                  <button
                    className='btn btn-outline-light mx-2'
                    type='submit'
                    onClick={() => {
                      navigate('/adminDashboard')
                    }}
                  >
                    Portal
                  </button>
                  <button
                    className='btn btn-outline-light mx-2'
                    type='submit'
                    onClick={() => {
                      localStorage.setItem('token', null)
                      navigate('/')
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  className='btn btn-outline-light mx-2'
                  type='submit'
                  onClick={() => {
                    navigate('/adminSignIn')
                  }}
                >
                  <PeopleIcon fill='white' size='medium' />
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
