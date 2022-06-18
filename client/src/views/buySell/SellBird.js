import { useNavigate } from 'react-router-dom'
import React from 'react'
const SellBird = (props) => {
  let navigate = useNavigate()
  return (
    <article
      className='col-md-4 col-sm-6 bg-light bg-opacity-75  card '
      Style='border-radius:5px'
      onClick={() => navigate('/BuySell/details/' + props._id)}
    >
      <img
        src={'http://localhost:3001/Images/' + props.image}
        className='card-img-top img-thumbnail'
        Style='height:280px'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.birdName}</h5>
        <p className='card-text '>PKR {props.price}</p>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => navigate('/BuySell/details/' + props._id)}
        >
          Details
        </button>
      </div>
    </article>
  )
}

export default SellBird
