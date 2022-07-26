import React, { useState } from 'react'
import useApi from '../../hooks/useApi'
import { TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'
import { motion } from 'framer-motion/dist/framer-motion'
const RemoveSell = () => {
  const { data: birds, loading } = useApi('/BuySell/read')
  if (loading) return <Loading />
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container text-center'
    >
      <h1 className='text-center'>BIRD LIST - BUY SELL</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col-1'>#</th>
            <th scope='col-2'>Name</th>
            <th scope='col-2'>Price</th>
            <th scope='col-2'>Image</th>
            <th scope='col-3'>Update</th>
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
                <th scope='col-3'>
                  {/* <button
                    Style=''
                    className='btn btn-outline-dark  '
                    type='submit'
                    onClick={() => {
                      axios.delete(
                        'http://localhost:3001/BirdsInformation/delete/' + b._id
                      )
                      window.location = '/removeBirdInformation'
                    }}
                    onClick={() => {
                      navigate("/")
                    }}
                  >
                    Update
                  </button> */}
                  <button
                    type='button'
                    class='btn btn-outline-dark'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Update Price
                  </button>
                  {/* Modal Start */}
                  <div
                    class='modal fade'
                    id='exampleModal'
                    tabindex='-1'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                  >
                    <div class='modal-dialog'>
                      <div class='modal-content'>
                        <div class='modal-header'>
                          <h5 class='modal-title'>Update Price</h5>
                          <button
                            type='button'
                            class='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div class='modal-body'>
                          <input
                            type='number'
                            placeholder='Enter New Price'
                            name='Price'
                            id='Price'
                          />
                        </div>
                        <div class='modal-footer'>
                          <button
                            type='button'
                            class='btn btn-secondary'
                            data-bs-dismiss='modal'
                          >
                            Close
                          </button>
                          <button
                            type='button'
                            class='btn btn-dark'
                            onClick={() => {
                              axios.put(
                                'http://localhost:3001/BuySell/updatePrice/' +
                                  b._id,
                                {
                                  price: document.getElementById('Price').value,
                                }
                              )
                              window.location = '/adminDashboard/removeSell'
                            }}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal END */}
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
    </motion.div>
  )
}
export default RemoveSell
