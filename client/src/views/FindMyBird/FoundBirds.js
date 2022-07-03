import React, { useState } from 'react'

import useApi from '../../hooks/useApi'
import Loading from '../../loading'
import { useNavigate, useParams } from 'react-router-dom'
import '../../index.css'
import { motion } from 'framer-motion/dist/framer-motion'
import Card from './Card'

const FoundBirds = () => {
  let { find } = useParams()
  const { data: birds, loading } = useApi('/findMyBird/readByName/' + find)

  let navigate = useNavigate()
  if (loading) return <Loading />
  console.log(birds)

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
      className='row container-fluid'
    >
      <div className='col-md-12 col-xl-10  py-3'>
        <div className='row justify-content-between'>
          <ol class='breadcrumb col-4 px-3'>
            <li class='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Found Birds
            </li>
          </ol>
        </div>

        <div>
          <h1 className='fs-2 fw-bold'>Related Birds</h1>
        </div>
        <div className='container-fluid'>
          <section className=' row justify-content-between '>
            {birds.map((b) => {
              return <Card key={b.id} {...b} />
            })}
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default FoundBirds
