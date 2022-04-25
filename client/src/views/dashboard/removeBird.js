import React from 'react'
import useApi from '../../hooks/useApi'
import { TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'

const RemoveBird = () => {
  const { data: birds, loading } = useApi('/read/BirdsInformation')
  if (loading) return <Loading />
  return (
    <div className='text-center container'>
      <h1>Bird List</h1>
      <section>
        {birds.map((b) => {
          return (
            <section className='row border border-2 border-dark my-2 py-2 align-items-center'>
              <img
                className='col-3'
                src={'http://localhost:3001/Images/' + b.image}
                alt=''
              />
              <h3 className='col-3'>{b.birdName}</h3>
              <h4 className='col-3'>class</h4>
              <button
                Style='height:50px'
                className='col-2 btn btn-outline-dark mx-2 my-2'
                type='submit'
                onClick={() => {
                  axios.delete(
                    'http://localhost:3001/delete/BirdsInformation/' + b._id
                  )
                  window.location = '/removeBirdInformation'
                }}
              >
                <TrashIcon size={24} />
              </button>
            </section>
          )
        })}
      </section>
    </div>
  )
}
export default RemoveBird
