import axios from 'axios'
import React, { useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
const ReportBird = () => {
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [image, setImage] = useState([])

  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }
  const changeOnClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('birdName', name)
    formData.append('birdType', type)
    formData.append('birdColor', color)
    formData.append('birdSize', size)
    formData.append('imageBird', image)
    axios
      .post('http://localhost:3001/findMyBird/insert', formData)
      .catch((err) => {})
    window.location = '/findMyBird'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
      className='container '
    >
      <h1 className='fs-1 fw-bold row justify-content-center my-3 mb-5'>
        Fill this form to report a lost bird you found !!
      </h1>
      <form
        className='row g-3 mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'
        onSubmit={changeOnClick}
        encType='multipart/form-data'
      >
        <div className='col-md-6'>
          <label for='birdName' className='form-label'>
            Bird Name
          </label>
          <input
            type='text'
            placeholder='Enter Name of the Bird'
            onChange={(e) => {
              setName(e.target.value)
            }}
            className='form-control'
            id='birdName'
          />
        </div>
        <div className='col-md-6'>
          <label for='birdSize' className='form-label'>
            Bird Age
          </label>
          <input
            type='text'
            placeholder='Enter Average Age of Bird (Adult or Young)'
            onChange={(e) => {
              setSize(e.target.value)
            }}
            className='form-control'
            id='birdSize'
          />
        </div>

        <div className='col-md-6'>
          <label for='color' className='form-label'>
            Color
          </label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => {
              setColor(e.target.value)
            }}
            id='color'
            placeholder='Enter Color of the Bird'
          />
        </div>
        <div className='col-md-6'>
          <label for='type' className='form-label'>
            Bird Type
          </label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => {
              setType(e.target.value)
            }}
            id='type'
            placeholder="Enter Bird's Type"
          />
        </div>

        <div className='col-md-6'>
          <h1>Image</h1>
          <input
            type='file'
            className='form-control-file'
            filename='imageBird'
            onChange={onChangeFile}
          />
        </div>
        <br />

        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Report Bird
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ReportBird
