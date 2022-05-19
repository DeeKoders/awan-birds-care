import React from 'react'
import { useNavigate } from 'react-router-dom'

const Donations = () => {
  let navigate = useNavigate()
  return (
    <div className='container-fluid mt-5' Style={''}>
      <div className='row  justify-content-evenly text-center mt-5  mb-5'>
        <div className='col-md-3 col-sm-auto py-5'>
          <div className='card py-5 mx-4'>
            <div className='card-body'>
              <h1 className='fs-1 fw-bold'>BECOME</h1>
              <p className='fs-4 fw-light'>A DONOR</p>
              <button
                onClick={() => navigate('/donations/donor')}
                className='btn btn-outline-dark'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-auto py-5'>
          <div className='card py-5 mx-4'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>GET</h5>
              <p className='fs-4 fw-light'>DONATIONS</p>
              <button
                onClick={() => navigate('/donations/donor')}
                className='btn btn-outline-dark'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Donations
