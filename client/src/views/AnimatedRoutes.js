import React from 'react'
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
import Needy from './donations/needy'
import PendingDonor from './dashboard/pendingDonor'
import RemoveSell from './dashboard/removeSell'
import SellDetailed from './buySell/sellDetailed'
import BirdsInformation from './information/BirdsInformation'
import DetailedScreen from './information/detailedScreen'
import { Routes, Route } from 'react-router-dom'
import FindMyBird from '../views/FindMyBird/FindMyBird'
import Find from './FindMyBird/find'
import FoundBirds from './FindMyBird/FoundBirds'
import ReportBird from './FindMyBird/ReportBird'
function AnimatedRoutes() {
  const user = localStorage.getItem('token')
  return (
    <Routes>
      {user && <Route exact path='/adminDashboard' element={<Dashboard />} />}
      <Route exact path='/BirdsInformation' element={<BirdsInformation />} />
      <Route exact path='/BirdSell' element={<Sell />} />
      <Route exact path='/signUp' element={<SignUp />} />
      <Route exact path='/adminSignIn' element={<Login />} />
      <Route exact path='/Donations' element={<Donations />} />
      <Route exact path='/donations/donor' element={<Donor />} />
      <Route exact path='/donations/needy' element={<Needy />} />
      <Route exact path='/findMyBird' element={<FindMyBird />} />
      <Route exact path='/findMyBird/find' element={<Find />} />
      <Route exact path='/findMyBird/report' element={<ReportBird />} />
      <Route exact path='/findMyBird/find/:find' element={<FoundBirds />} />
      <Route
        exact
        path='/BirdsInformation/details/:name'
        element={<DetailedScreen />}
      />
      <Route exact path='/BuySell/details/:name' element={<SellDetailed />} />
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

      <Route exact path='/removeBirdInformation' element={<RemoveBird />} />
      <Route exact path='/adminDashboard/addBirds' element={<AddBird />} />
      <Route exact path='/adminDashboard/addSell' element={<AddSell />} />
      <Route exact path='/adminDashboard/removeSell' element={<RemoveSell />} />
      <Route
        exact
        path='/adminDashboard/pendingDonor'
        element={<PendingDonor />}
      />
      <Route
        exact
        path='/adminDashboard/approvedDonor'
        element={<PendingDonor />}
      />
    </Routes>
  )
  
}

export default AnimatedRoutes
