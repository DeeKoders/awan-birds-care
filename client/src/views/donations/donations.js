import React from 'react'
import { useNavigate } from 'react-router-dom'
import donorimg from '../../images/donor.jpg'
import needyimg from '../../images/needy.jpg'
import { motion } from 'framer-motion/dist/framer-motion'
const Donations = () => {
  let navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container-fluid '
      Style='min-height: 75vh'
    >
      <div className='row  justify-content-evenly text-center  mb-5'>
        <div className='col-md-4 bg-secondary col-sm-auto py-5'>
          <div className='card py-2 mx-4'>
            <div className='card-body'>
              <img
                width={window.innerWidth / 4.5}
                height={window.innerHeight / 3}
                src={donorimg}
                alt=''
              />
              <p className='fs-4 fw-light'>I'M the DONOR</p>
              <button
                onClick={() => navigate('/donations/donor')}
                className='btn btn-outline-dark'
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4 bg-secondary col-sm-auto py-5'>
          <div className='card py-2 mx-4'>
            <div className='card-body'>
              <img
                width={window.innerWidth / 4.5}
                height={window.innerHeight / 3}
                src={needyimg}
                alt=''
              />
              <p className='fs-4 fw-light'>I NEED HELPING HAND</p>
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
    </motion.div>
  )
}
export default Donations
