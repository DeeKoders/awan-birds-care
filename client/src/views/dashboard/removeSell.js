import React from 'react'
import useApi from '../../hooks/useApi'
import { TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'

const RemoveSell = () => {
  const { data: birds, loading } = useApi('/BuySell/read')
  if (loading) return <Loading />
  return (
    <div className='container'>
      <h1 className='text-center'>BIRD LIST - BUY SELL</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col-1'>#</th>
            <th scope='col-3'>Name</th>
            <th scope='col-3'>Price</th>
            <th scope='col-3'>Image</th>
            <th scope='col-2'>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {birds.map((b) => {
            let count = 0
            count++
            return (
              <tr>
                <th scope='col-1'>{count}</th>
                <th scope='col-3'>{b.birdName}</th>
                <th scope='col-3'>{b.price}</th>
                <th scope='col-3'>
                  <img
                    width={70}
                    height={50}
                    src={'http://localhost:3001/Images/' + b.image}
                    alt=''
                  />
                </th>
                <th scope='col-2'>
                  <button
                    Style=''
                    className='btn btn-outline-dark  '
                    type='submit'
                    onClick={() => {
                      axios.delete(
                        'http://localhost:3001/BuySell/delete/' + b._id
                      )
                      window.location = '/adminDashboard/removeSell'
                    }}
                  >
                    <TrashIcon size={22} />
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* <section>
        {birds.map((b) => {
          return (
            <section className='row justify-content-evenly border border-2 border-dark my-2 py-2 mx-0 px-0 align-items-center'>
              <img
                className='col-3'
                Style='height:70px; width:140px'
                src={'http://localhost:3001/Images/' + b.image}
                alt=''
              />
              <h3 className='fs-5 col-3'>{b.birdName}</h3>
              <h4 className='fs-5 col-4 text-truncate'>{b.details}</h4>
              <button
                Style='height:70px'
                className='col-1 btn btn-outline-dark mx-2 my-2'
                type='submit'
                onClick={() => {
                  axios.delete(
                    'http://localhost:3001/BirdsInformation/delete/' + b._id
                  )
                  window.location = '/removeBirdInformation'
                }}
              >
                <TrashIcon size={24} />
              </button>
            </section>
          )
        })}
      </section> */}
    </div>
  )
}
export default RemoveSell