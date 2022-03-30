import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className='container-fluid col px-0 py-1'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide carousel-fade row'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <i data-feather='circle'></i>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/awanbirds-80258.appspot.com/o/images%2Fh3.jpg?alt=media&token=4b7849bb-7051-455a-9e1e-a93356784689'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button className='btn btn-primary'>Information</button>
              <button className='btn btn-success'>Buy/Sell</button>
              <button className='btn btn-danger'>Donations</button>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/awanbirds-80258.appspot.com/o/images%2Fh2.jpg?alt=media&token=99f36184-6532-4c48-92cf-f7e9412b96e9'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button className='btn btn-primary'>Information</button>
              <button className='btn btn-success'>Buy/Sell</button>
              <button className='btn btn-danger'>Donations</button>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/awanbirds-80258.appspot.com/o/images%2Fh1.jpg?alt=media&token=8a3a3b21-59d5-4710-a4ec-fced6b7aae6d'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button className='btn btn-primary'>Information</button>
              <button className='btn btn-success'>Buy/Sell</button>
              <button className='btn btn-danger'>Donations</button>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev '
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div className='row justify-content-center'>
        <div className='border rounded position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light col-md-8 '>
          <div className='col-md-5 p-lg-5 mx-auto my-5'>
            <h1 className='display-4 fw-normal'>Birds Informations</h1>
            <p className='lead fw-normal'>
              Are you trying to find some data about your favourite Birds?? You
              Are on the right Place.
            </p>
            <button
              className='btn btn-outline-secondary'
              onClick={() => navigate('/BirdsInformation')}
            >
              Click Here !!
            </button>
          </div>
          <div className='product-device shadow-sm d-none d-md-block'></div>
          <div className='product-device product-device-2 shadow-sm d-none d-md-block'></div>
        </div>
        <div className='col-md-3 col-sm-auto  p-3 pl-3 text-center'>
          <div className='row p-4 mb-3 bg-light rounded'>
            <h3 className='fw-bold'>About Owner</h3>
            <h4 className='fs-5'>Mazhar Ali</h4>
            <p className='mb-0 fw-light'>
              Banker by Profession. Interest in taming and taking care of Birds.
              Mazhar Ali have been in this business for over 5 years.
            </p>
          </div>
          <div className='row p-4 mb-3 bg-light rounded'>
            <h3 className='fw-bold'>Our Mission</h3>
            <h4 className='fs-5'>Awan Birds Care</h4>
            <p className='mb-0 fw-light'>
              Our Mission is to spread awareness about Bird Care, So people can
              take better care of them.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
