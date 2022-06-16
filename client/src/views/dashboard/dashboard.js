import { PlusCircleIcon, LogIcon } from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='container-fluid my-3'>
      <div className='row'>
        <nav
          id='sidebarMenu'
          className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
        >
          <div className='position-sticky py-3'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link
                  className='nav-link text-dark fw-bold'
                  to='/adminDashboard/addBirds'
                >
                  <PlusCircleIcon className='mx-2' size={20} />
                  Add Birds - Information
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link
                  className='nav-link text-dark fw-bold'
                  to='/removeBirdInformation'
                >
                  <PlusCircleIcon className='mx-2' size={20} />
                  Remove Bird - Information
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link
                  className='nav-link text-dark fw-bold'
                  to='/adminDashboard/addSell'
                >
                  <PlusCircleIcon className='mx-2' size={20} />
                  Add Birds - Buy/Sell
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link className='nav-link text-dark fw-bold' to='/adminDashboard/removeSell'>
                  <PlusCircleIcon className='mx-2' size={20} />
                  Remove Bird - Buy/Sell
                </Link>
              </li>
            </ul>

            <h1 className='fs-4 py-3 mt-4 mb-3 mt-4 text-center text-dark text-uppercase fw-bold text-white bg-dark '>
              Saved reports
            </h1>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link className='nav-link text-dark fw-bold' to='/adminDashboard/pendingDonor'>
                  <LogIcon size={20} className='mx-2' />
                  Donor's Pending Request
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link className='nav-link text-dark fw-bold' to='/adminDashboard/approvedDonor'>
                  <LogIcon size={20} className='mx-2' />
                  Approved Donors
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link className='nav-link text-dark fw-bold' to='/'>
                  <LogIcon size={20} className='mx-2' />
                  Sold Birds
                </Link>
              </li>
              <hr />
              <li className='nav-item'>
                <Link className='nav-link text-dark fw-bold' to='/'>
                  <LogIcon size={20} className='mx-2' />
                  Found Birds Report
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className='col-md-8 ms-sm-auto col-lg-9 px-md-4 bg-white '>
          <div className='chartjs-size-monitor'>
            <div className='chartjs-size-monitor-expand'>
              <div className=''></div>
            </div>
            <div className='chartjs-size-monitor-shrink'>
              <div className=''></div>
            </div>
          </div>
          <div className='d-flex justify-content-between flex-wrap flex-md-nowrap   align-items-center pt-3 pb-2 mb-3 border-bottom'>
            <h1 className='h2 text-uppercase fw-bold'>Dashboard</h1>
            <div className='btn-toolbar mb-2 mb-md-0'>
              <div className='btn-group me-2'>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Share
                </button>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                >
                  Export
                </button>
              </div>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary dropdown-toggle'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-calendar'
                  aria-hidden='true'
                >
                  <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
                  <line x1='16' y1='2' x2='16' y2='6'></line>
                  <line x1='8' y1='2' x2='8' y2='6'></line>
                  <line x1='3' y1='10' x2='21' y2='10'></line>
                </svg>
                This week
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Dashboard
