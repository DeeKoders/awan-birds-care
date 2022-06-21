import React from 'react'
import { useNavigate } from 'react-router-dom'

const Donations = () => {
  let navigate = useNavigate()
  return (
    <div className='container-fluid' Style={''}>
      <div className='row  justify-content-evenly text-center  mb-5'>
        <div Style="min-height: 18vh"></div>
        <div className='col-md-3 col-sm-auto py-5'>
          <div className='card py-5 mx-4'>
            <div className='card-body'>
              <h5 className='fs-1 fw-bold'>I'M</h5>
              <p className='fs-4 fw-light'>the DONOR</p>
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
              <h5 className='fs-1 fw-bold'>I NEED</h5>
              <p className='fs-4 fw-light'>HELPING HAND</p>
              <button
                onClick={() => navigate('/donations/needy')}
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
