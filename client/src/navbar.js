import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PeopleIcon } from '@primer/octicons-react'

import './index.css'
const Navbar = (props) => {
  console.log('User = ' + localStorage.getItem('emailID'))
  let navigate = useNavigate()
  return (
    <div>
      <nav className='navbar navbar-scroll navbar-expand-lg navbar-light  text-uppercase '>
        <div className='text-dark container'>
          <a className='col text-dark fs-4 fw-bold navbar-brand' href='/'>
            Awan Birds Care
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            className=' collapse navbar-collapse'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item '>
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
                <Link className='nav-link' to='/findMyBird'>
                  Find My Bird
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/BirdSell'>
                  Buy Sell
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
              {props.data !== 'null' ? (
                <div className='d-flex'>
                  <button
                    className='btn btn-dark mx-2'
                    type='submit'
                    onClick={() => {
                      localStorage.getItem('token') != null
                        ? navigate('/adminDashboard')
                        : navigate('/error')
                    }}
                  >
                    Portal
                  </button>
                  <button
                    className='btn btn-dark mx-2'
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
                  className='btn btn-outline-dark mx-2'
                  type='submit'
                  onClick={() => {
                    navigate('/adminSignIn')
                  }}
                >
                  <PeopleIcon size='medium' />
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
