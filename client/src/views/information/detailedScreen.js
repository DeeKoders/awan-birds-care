import { useParams } from 'react-router-dom'
import React from 'react'
import '../../index.css'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'

const DetailedScreen = () => {
  let { name } = useParams()
  const { data: bird, loading } = useApi('/read/' + name)

  if (loading) return <Loading />

  return (
    <div Style={'margin-bottom: 20vh;'}>
      <div className='row justify-content-md-center text-center py-4'>
        <div className='col text-white mb-4'>
          <h1 className='fs-1 fw-bold text-dark text-uppercase'>
            peculiarities of {bird.birdName}
          </h1>
        </div>
      </div>
      <div className='row justify-content-evenly py-4'>
        <div className='col-md-4 col-sm-auto bg-light py-4 px-4 border border-5 rounded border-dark d-grid gap-1'>
          <div className='row '>
            <h1 className=' fs-2 text-dark '>Parrot Name: </h1>
            <h1 className='fs-4 text-dark fw-light '>{bird.birdName}</h1>
          </div>
          <div className='row'>
            <h1 className=' fs-2 text-dark '>Temprature: </h1>
            <h1 className='fs-4 text-dark fw-light '>{bird.temprature}</h1>
          </div>
          <div className='row'>
            <h1 className=' fs-2 text-dark '>Food: </h1>
            <h1 className='fs-4 text-dark fw-light '>{bird.food}</h1>
          </div>
          <div className='row'>
            <h1 className=' fs-2 text-dark '>Details: </h1>
            <h1 className='fs-4 text-dark fw-light '>{bird.details}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedScreen
