import React from 'react'
import useApi from '../../hooks/useApi'
import { CheckCircleIcon, TrashIcon } from '@primer/octicons-react'
import Loading from '../../loading'
import axios from 'axios'

function ApprovedDonor() {
    const { data: donors, loading,setData, setLoading } = useApi('/Donors/readApproved')
    if (loading) return <Loading />
  return (
    <div className='container'>
      <h1 className='text-center'>Approved Donors</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col-1'>#</th>
            <th scope='col-3'>Name</th>
            <th scope='col-3'>Email Address</th>
            <th scope='col-3'>City</th>
            <th scope='col-2'>Click to Approve</th>
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
                    className='btn btn-outline-dark border  '
                    type='submit'
                    onClick={async () => {
                      
                    }}
                  >
                    <CheckCircleIcon size={26} />
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

export default ApprovedDonor