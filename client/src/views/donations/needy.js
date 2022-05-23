import React from 'react'

function Needy() {
  const changeOnClick = (e) => {
    e.preventDefault()
    console.log(document.getElementById('inputState').value)
  }
  return (
    <div className='container '>
      <h1 className='fs-1 fw-bold row justify-content-center my-3 mb-5'>
        You Need a helping hand to grow your business??
      </h1>
      <h1 className='fs-3 fw-bold row justify-content-center my-0 mb-5'>
        We are here to Help !!
      </h1>
      <form
        onSubmit={changeOnClick}
        className='row g-3 mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'
      >
        <div className='col-md-12 fs-5 fw-bold d-flex justify-content-center'>
          Fill out this form so our Team can contact you ASAP !!
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputEmail' className='form-label'>
            Email
          </label>
          <input
            type='email'
            required='false'
            placeholder='Enter Your Email (Optional)'
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
            required='true'
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
            required='true'
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
        <div className='col-6'>
          <label htmlFor='phone' className='form-label'>
            Contact No.
          </label>
          <input
            type='number'
            required='true'
            className='form-control'
            id='phone'
            placeholder='Enter Your Phone Number (eg. 0312 7******)'
          />
        </div>
        <div className='col-6'>
          <label htmlFor='Donations' className='form-label'>
            Donation Type
          </label>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='DonationType'
              id='moneyDonation'
            />
            <label class='form-check-label' for='moneyDonation'>
              Donations By Money
            </label>
          </div>
          <div class='form-check'>
            <input
              class='form-check-input'
              type='radio'
              name='DonationType'
              id='birdDonation'
            />
            <label class='form-check-label' for='birdDonation'>
              Donations By Birds
            </label>
          </div>
        </div>

        <div className='col-md-4'>
          <label htmlFor='inputState' className='form-label'>
            State
          </label>
          <select id='inputState' className='form-select'>
            <option selected>None</option>
            <option value='bal'>Balochistan</option>
            <option value='kpk'>Khyber Pakhtunkhwa</option>
            <option value='pun'>Punjab</option>
            <option value='sin'>Sindh</option>
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

export default Needy
