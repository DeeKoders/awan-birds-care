import React from 'react'
// import { Birds } from './information/Birds'
import Bird from './information/Bird'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'
import Loading from '../loading'
import { motion } from 'framer-motion/dist/framer-motion'
const Search = (props) => {
  let { myText } = useParams()
  const { data: birds, loading } = useApi('/' + props.cat + '/read')

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
    <motion.div
      Style='min-height: 100vh'
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container-fluid  bg-opacity-100  py-3 px-4'
    >
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
    </motion.div>
  )
}
export default Search
