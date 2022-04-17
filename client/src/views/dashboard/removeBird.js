import React from 'react'
import useApi from '../../hooks/useApi'
import { TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'

const RemoveBird = () => {
  const { data: birds, loading } = useApi('/read')
  if (loading) return <Loading />
  return (
    <div className='text-center container'>
      <h1>Bird List</h1>
      <section>
        {birds.map((b) => {
          return (
            <section className='row border border-2 border-dark my-2'>
              <h3 className='col-8'>{b.birdName}</h3>
              <button
                className='col-1 btn btn-outline-dark mx-2 my-2'
                type='submit'
                onClick={() => {
                  alert(b._id)
                  axios.delete('http://localhost:3001/delete/' + b._id)
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
