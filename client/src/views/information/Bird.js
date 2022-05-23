import { useNavigate } from 'react-router-dom'
import React from 'react'
const Bird = (props) => {
  let navigate = useNavigate()
  return (
    <div
      className='col-xl-3 col-sm-2 card my-3 py-2 mx-2'
      Style='width:33rem;'
      onClick={() => navigate('/BirdsInformation/details/' + props._id)}
    >
      <img
        src={'http://localhost:3001/Images/' + props.image}
        className='card-img-top img-thumbnail'
        Style='height:20rem'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.birdName}</h5>
        <p className='card-text text-truncate'>{props.details}</p>
        <button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() =>
            navigate('/screens/BirdsInformation/details/' + props._id)
          }
        >
          Details
        </button>
      </div>
    </div>
  )
}

export default Bird
