import { useNavigate } from 'react-router-dom'

const Bird = (props) => {
  let navigate = useNavigate()
  return (
    <article
      className='card my-2'
      Style='width:30.2rem;'
      onClick={() => navigate('/BirdsInformation/details/' + props._id)}
    >
      {console.log(props.image)}
      <img
        src={'http://localhost:3001/Images/' + props.image}
        className='card-img-top img-thumbnail'
        Style='height:350px'
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
    </article>
  )
}

export default Bird
