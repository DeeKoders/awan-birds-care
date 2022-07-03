import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

import React from 'react'
const SellBird = (props) => {
  let navigate = useNavigate()
  return (
    <motion.article
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='col-md-4 col-sm-6 bg-light bg-opacity-75  card '
      Style='border-radius:5px'
      onClick={() => navigate('/BuySell/details/' + props._id)}
    >
      <img
        src={'http://localhost:3001/Images/' + props.image}
        className='card-img-top mt-2 img-thumbnail'
        Style='height:280px'
        alt='...'
      />
      <div className='card-body'>
        <p className='card-text fs-5 my-0'>{props.birdName}</p>
        <p className='card-title fw-bold fs-4'>Rs. {props.price}</p>
        <div className='row mt-4'>
          <p className='col card-text  my-0 text-dark opacity-50'>
            {props.sellerLocation}, Pakistan
          </p>
          <p className='col card-text my-0  text-dark opacity-50'>
            Owned by: {props.sellerName}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default SellBird
