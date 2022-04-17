import React from 'react'
// import { Birds } from './information/Birds'
import Bird from './information/Bird'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Loading from '../loading'

const Search = () => {
  let { myText } = useParams()
  const { data: birds, loading } = useApi('/read')

  if (loading) return <Loading />

  const s = []
  let count = 0
  for (let i = 0; i < birds.length; i++) {
    if (birds[i].birdName.toLowerCase().includes(myText.toLowerCase())) {
      s[count] = birds[i]
      count++
    } else {
    }
  }

  return (
    <div className='container-fluid  bg-opacity-100  py-3 px-4'>
      <div className='row  justify-content-md-center text-center border border-4 bg-dark border-secondary py-3 text-light '>
        <h1 className='fs-2'>Search Results for: {myText}</h1>
      </div>
      <div>
        <section className=' birdlist'>
          {s.map((b) => {
            return <Bird key={b.id} {...b} />
          })}
        </section>
      </div>
    </div>
  )
}
export default Search
