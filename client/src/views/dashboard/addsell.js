import axios from 'axios'
import React, { useState } from 'react'

const AddSell = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [age, setAge] = useState('')
  const [details, setDetails] = useState('')
  const [image, setImage] = useState([])

  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }
  const changeOnClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('birdName', name)
    formData.append('birdAge', age)
    formData.append('birdPrice', price)
    formData.append('birdDetails', details)
    formData.append('imageBird', image)

    axios
      .post('http://localhost:3001/insertForSell', formData)
      .catch((err) => {})
    window.location = '/adminDashboard/addSell'
  }

  return (
    <div className='container '>
      <h1 className='fs-1 fw-bold row justify-content-center my-3 mb-5'>
        Add Birds to Database
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
            placeholder='Enter Age of Bird'
            onChange={(e) => {
              setAge(e.target.value)
            }}
            className='form-control'
            id='birdAge'
          />
        </div>
        <div className='col-6'>
          <label for='temprature' className='form-label'>
            Price
          </label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            id='birdPrice'
            placeholder='Enter Price of the Bird: '
          />
        </div>

        <div className='col-12'>
          <label for='details' className='form-label'>
            Details
          </label>
          <br />
          <textarea
            rows='7'
            className='col-md-12 col-sm-auto'
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            placeholder='Enter Brief Detail of Bird'
            id='message'
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
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='gridCheck'
            />
            <label className='form-check-label' for='gridCheck'>
              Are You Sure that the above Information is Correct?
            </label>
          </div>
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Add Bird For Sell
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSell
