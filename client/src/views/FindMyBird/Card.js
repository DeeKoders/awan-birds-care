import { useNavigate } from 'react-router-dom'
import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
const Card = (props) => {
  let navigate = useNavigate()
  console.log(props)
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='col-md-4 col-sm-6 bg-light bg-opacity-75  card '
      Style='border-radius:5px'
    >
      <div className='pt-2' Style='position:relative'>
        <span
          class='mx-2 my-2 badge bg-primary text-uppercase'
          Style='position:absolute'
        >
          {' '}
          {props.type}
        </span>
        <img
          src={'http://localhost:3001/Images/' + props.image}
          className='card-img-top img-thumbnail bg-opacity-75 bg-light  '
          Style='height:15rem'
          alt='...'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{props.birdName}</h5>
        <p className='card-text text-truncate text-uppercase'>
          Color: {props.color}
        </p>
        <p className='card-text text-truncate text-uppercase'>
          Size: {props.size}
        </p>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => navigate('/BirdsInformation/details/' + props._id)}
        >
          Details
        </button>
      </div>
    </motion.div>
  )
}

export default Card
