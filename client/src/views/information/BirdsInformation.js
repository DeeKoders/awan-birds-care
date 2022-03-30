import React from 'react'
import Bird from './Bird'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'

const BirdsInformation = () => {
  const { data: birds, loading } = useApi('/read')

  if (loading) return <Loading />
  console.log(birds)

  return (
    <div className='bg-opacity-100  py-3 px-4'>
      <div className='row  justify-content-md-center text-center border border-4 bg-dark border-secondary py-3 text-light '>
        <h1 className='fs-2'>BIRDS INFORMATION</h1>
      </div>
      <div>
        <section className=' birdlist'>
          {birds.map((b) => {
            return <Bird key={b.id} {...b} />
          })}
        </section>
      </div>
    </div>
  )
}

export default BirdsInformation
