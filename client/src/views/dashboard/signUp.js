import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  let navigate = useNavigate()
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = 'http://localhost:3001/api/user'

      const { data: res } = await axios.post(url, data)

      navigate('/adminSignIn')

      console.log(res.message)
    } catch (error) {
      alert('Catch Block')
      console.log(error.response)
      if (
        error.response &&
        error.response.status >= 400 &&
        error.reponse.status <= 500
      ) {
        alert('setError')
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className='App text-center gap-4 '>
      <main className='form-signin container border border-1 border-secondary bg-white bg-opacity-50 py-4 px-4'>
        <form>
          <h1>Awan Birds Care</h1>
          <h1 className='h3 mb-3 fw-normal my-4'>Please Sign Up</h1>

          <div className='form-floating my-1'>
            <input
              type='text'
              name='firstName'
              className='form-control'
              id='floatingInput'
              placeholder='First Name'
              // value={data.firstName}
              required
              onChange={handleChange}
            />
            <label htmlFor='floatingInput'>First Name</label>
          </div>

          <div className='form-floating my-1'>
            <input
              type='text'
              className='form-control'
              id='floatingInput1'
              placeholder='Last Name'
              name='lastName'
              // value={data.lastName}
              required
              onChange={handleChange}
            />
            <label htmlFor='floatingInput1'>Last Name</label>
          </div>

          <div className='form-floating my-1'>
            <input
              type='email'
              className='form-control'
              id='floatingInput2'
              placeholder='Email Address'
              name='email'
              // value={data.email}
              required
              onChange={handleChange}
            />
            <label htmlFor='floatingInput2'>Email address</label>
          </div>

          <div className='form-floating my-1'>
            <input
              type='password'
              className='form-control'
              id='floatingInput3'
              placeholder='Password'
              name='password'
              // value={data.password}
              required
              onChange={handleChange}
            />
            <label htmlFor='floatingInput3'>Password</label>
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input
                type='checkbox'
                value='remember-me'
                className='mt-4 mb-2'
              />{' '}
              Remember me
            </label>
          </div>
          {error && <div>{error}</div>}
          <button
            className='w-100 btn btn-lg btn-dark signinbuttons my-0'
            type='submit'
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p className='mt-5 mb-3 text-muted'>© 2021 – 2022</p>
        </form>
      </main>
    </div>
  )
}

export default SignUp
