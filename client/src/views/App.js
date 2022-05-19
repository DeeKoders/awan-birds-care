import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import BirdsInformation from './information/BirdsInformation'
import DetailedScreen from './information/detailedScreen'
import Navbar from '../navbar'
import Home from './home'
import Donations from './donations/donations'
import Donor from './donations/donor'
import Search from './search'
import Dashboard from './dashboard/dashboard'
import Login from './dashboard/login'
import AddBird from './dashboard/addBird'
import SignUp from './dashboard/signUp'
import RemoveBird from './dashboard/removeBird'
import AddSell from './dashboard/addsell'
import Sell from './buySell/sell'
// import '../index.css'

function App() {
  const user = localStorage.getItem('token')
  console.log(user)

  return (
    <div className='container-fluid '>
      <div className='main'>
        <Router>
          <Navbar data={user} />
          <hr />
          <Routes>
            {user && (
              <Route exact path='/adminDashboard' element={<Dashboard />} />
            )}
            <Route
              exact
              path='/BirdsInformation'
              element={<BirdsInformation />}
            />
            <Route exact path='/BirdSell' element={<Sell />} />
            <Route exact path='/signUp' element={<SignUp />} />
            <Route exact path='/adminSignIn' element={<Login />} />
            <Route exact path='/Donations' element={<Donations />} />
            <Route exact path='/donations/donor' element={<Donor />} />
            <Route
              exact
              path='/BirdsInformation/details/:name'
              element={<DetailedScreen />}
            />
            <Route
              exact
              path='/search/BirdsInformation/:myText'
              element={<Search cat='BirdsInformation' />}
            />
            <Route
              exact
              path='/search/BuySell/:myText'
              element={<Search cat='BuySell' />}
            />
            <Route exact path='/' element={<Home />} />
            {/* Routes
                For
                  Dashboard */}

            <Route
              exact
              path='/removeBirdInformation'
              element={<RemoveBird />}
            />
            <Route
              exact
              path='/adminDashboard/addBirds'
              element={<AddBird />}
            />
            <Route exact path='/adminDashboard/addSell' element={<AddSell />} />
          </Routes>
        </Router>
      </div>
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
    </div>
  )
}

export default App
