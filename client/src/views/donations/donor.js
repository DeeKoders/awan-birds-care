import React, { useState } from 'react'

const Donor = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phno, setPhno] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')


  const submitDonor = (e) =>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('city', city)
    formData.append('birdDetails', details)
    formData.append('birdSize', size)
    formData.append('imageBird', image)
    axios
      .post('http://localhost:3001/BirdsInformation/insert', formData)
      .catch((err) => {})
    window.location = '/adminDashboard/addBirds'
    

  }
  return (
    <div className='container '>
      <h1 className='fs-1 fw-bold row justify-content-center my-3 mb-5'>
        Donor Registration
      </h1>
      <form onSubmit={submitDonor} className='row g-3 mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'>
        <div className='col-md-6'>
          <label htmlFor='inputEmail' className='form-label'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='form-control'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            id='inputEmail'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputPhone' className='form-label'>
            Contact Number
          </label>
          <input
            type='text'
            onChange={(e) => {
              setPhno(e.target.value)
            }}
            placeholder='Enter Your Phone Number (e.g. 031273*****)'
            className='form-control'
            id='inputPhone'
          />
        </div>
        <div className='col-6'>
          <label htmlFor='inputName' className='form-label'>
            Username
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type='text'
            className='form-control'
            id='inputName'
            placeholder='Enter Your Username'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputCity' className='form-label'>
            City
          </label>
          <input type='text' onChange={(e) => {
              setCity(e.target.value)
            }}
            className='form-control' id='inputCity' />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label'>
            Address
          </label>
          <input
          onChange={(e) => {
            setAddress(e.target.value)
          }}
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='Enter Your Complete Address'
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor='inputState' className='form-label'>
            State
          </label>
          <select id='inputState' onChange={(e) => {
            setState(e.target.value)
          }} className='form-select'>
            <option selected>None</option>
            <option value='Balochistan'>Balochistan</option>
            <option value='Khyber Pakhtunkhwa'>Khyber Pakhtunkhwa</option>
            <option value='Punjab'>Punjab</option>
            <option value='Sindh'>Sindh</option>
          </select>
        </div>
        <div className='col-md-2'>
          <label htmlFor='inputZip' className='form-label'>
            Zip
          </label>
          <input type='text' onChange={(e) => {
            setZip(e.target.value)
          }} className='form-control' id='inputZip' />
        </div>
        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='gridCheck'
            />
            <label className='form-check-label' htmlFor='gridCheck'>
              Do you agree to share the above information?
            </label>
          </div>
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default Donor
