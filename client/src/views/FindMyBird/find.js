import React, { useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { useNavigate } from 'react-router-dom'

function Find() {
  const [name, setName] = useState('')
  let navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container'
      wid
    >
      <form
        onSubmit={() => {
          alert(name)
          navigate('/findMyBird/find/' + name)
        }}
        className='row   justify-content-center mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'
      >
        <div className='col-md-6'>
          <label htmlFor='inputName' className='form-label'>
            Bird Name
          </label>
          <input
            type='text'
            placeholder='Enter Name of the Bird'
            className='form-control'
            onChange={(e) => {
              setName(e.target.value)
            }}
            id='inputName'
          />
        </div>

        <div className='col-12 py-2 text-center'>
          <button Style='width: 30%' type='submit' className='btn btn-primary'>
            Find By Name
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default Find
