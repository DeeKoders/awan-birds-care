import React from 'react'
import { useNavigate } from 'react-router-dom'
import h1 from '../images/h1.jpg'
import h2 from '../images/h2.jpg'
import h3 from '../images/h3.jpg'
import { motion } from 'framer-motion/dist/framer-motion'
const Home = () => {
  let navigate = useNavigate()
  return (
    <motion.div
      Style='min-height: 100vh'
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container col px-0'
    >
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
            <img src={h1} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button
                onClick={() => navigate('/BirdsInformation')}
                className='btn btn-primary'
              >
                Information
              </button>
              <button
                onClick={() => navigate('/BirdSell')}
                className='btn btn-success'
              >
                Buy/Sell
              </button>
              <button
                onClick={() => navigate('/donations')}
                className='btn btn-danger'
              >
                Donations
              </button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={h2} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button
                onClick={() => navigate('/BirdsInformation')}
                className='btn btn-primary'
              >
                Information
              </button>
              <button
                onClick={() => navigate('/BirdSell')}
                className='btn btn-success'
              >
                Buy/Sell
              </button>
              <button
                onClick={() => navigate('/donations')}
                className='btn btn-danger'
              >
                Donations
              </button>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={h3} className='d-block w-100' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Welcome to Awan Birds Care!!</h2>
              <p>Its time to become aware of Birds Care !!</p>
              <button
                onClick={() => navigate('/BirdsInformation')}
                className='btn btn-primary'
              >
                Information
              </button>
              <button
                onClick={() => navigate('/BirdSell')}
                className='btn btn-success'
              >
                Buy/Sell
              </button>
              <button
                onClick={() => navigate('/donations')}
                className='btn btn-danger'
              >
                Donations
              </button>
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
    </motion.div>
  )
}

export default Home
