import React from 'react'
import useApi from '../../hooks/useApi'
import { TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'

function PendingDonor() {
    const { data: donors, loading } = useApi('/Donors/read')
    if (loading) return <Loading />
  return (
    <div className='container'>
      <h1 className='text-center'>BIRD LIST - BIRD INFORMATION</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col-1'>#</th>
            <th scope='col-3'>Name</th>
            <th scope='col-3'>Details</th>
            <th scope='col-3'>Image</th>
            <th scope='col-2'>Delete Button</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((b) => {
            let count = 0
            count++
            return (
              <tr>
                <th scope='col-1'>{count}</th>
                <th scope='col-3'>{b.name}</th>
                <th scope='col-3'>{b.email}</th>
                <th scope='col-3'>{b.city}</th>
                <th scope='col-2'>
                  <button
                    Style=''
                    className='btn btn-outline-dark  '
                    type='submit'
                    onClick={() => {
                      axios.delete(
                        'http://localhost:3001/BirdsInformation/delete/' + b._id
                      )
                      window.location = '/removeBirdInformation'
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
      
    </div>
  )
}

export default PendingDonor