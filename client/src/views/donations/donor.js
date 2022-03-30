import React from 'react'

const Donor = () => {
  return (
    <div className='container '>
      <h1 className='fs-1 fw-bold row justify-content-center my-3 mb-5'>
        Donor Registration
      </h1>
      <form className='row g-3 mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'>
        <div className='col-md-6'>
          <label htmlFor='inputEmail' className='form-label'>
            Email
          </label>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='form-control'
            id='inputEmail'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter Your Password'
            className='form-control'
            id='inputPassword'
          />
        </div>
        <div className='col-6'>
          <label htmlFor='inputName' className='form-label'>
            Username
          </label>
          <input
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
          <input type='text' className='form-control' id='inputCity' />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label'>
            Address
          </label>
          <input
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
          <select id='inputState' className='form-select'>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='col-md-2'>
          <label htmlFor='inputZip' className='form-label'>
            Zip
          </label>
          <input type='text' className='form-control' id='inputZip' />
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
