import { useNavigate } from 'react-router-dom'
import React from 'react'
const Bird = (props) => {
  let navigate = useNavigate()
  return (
    <div
      className='col-md-4 col-sm-6 bg-light bg-opacity-75  card px-2 pt-2'
      Style="border-radius:12px"

      onClick={() => navigate('/BirdsInformation/details/' + props._id)}
    >
      <img
        src={'http://localhost:3001/Images/' + props.image}
        className='card-img-top img-thumbnail bg-opacity-75 bg-light  '
        Style='height:15rem'
        
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
