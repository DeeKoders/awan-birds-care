import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = 'http://localhost:3001/api/auth'
      const { data: res } = await axios.post(url, data)
      localStorage.setItem('token', res.data)
      localStorage.setItem('emailID', data["email"])
      window.location = '/adminDashboard'
      // navigate('/adminDashboard')
    } catch (error) {
      if (error.response.status >= 400) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className='App text-center gap-4 '>
      <main className='form-signin container border border-1 border-secondary bg-white bg-opacity-50 py-4 px-4'>
        <form>
          <h1>Awan Birds Care</h1>
          <h1 className='h3 mb-3 fw-normal my-4'>Please Login Here</h1>

          <div className='form-floating my-1'>
            <input
              type='email'
              name='email'
              className='form-control'
              id='floatingInput2'
              placeholder='Email Address'
              required
              onChange={handleChange}
            />
            <label htmlFor='floatingInput2'>Email address</label>
          </div>

          <div className='form-floating my-1'>
            <input
              type='password'
              name='password'
              className='form-control'
              id='floatingInput3'
              placeholder='Password'
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
              Check Your Credentials
            </label>
          </div>
          {error && (
            <div
              className='alert alert-danger alert-dismissible fade show'
              role='alert'
            >
              {error}
            </div>
          )}
          <button
            className='w-100 btn btn-lg btn-dark signinbuttons my-0'
            type='submit'
            onClick={handleSubmit}
          >
            Login
          </button>

          <div>
            <h1 className='mt-4 fs-5'>New User ??</h1>
            <Link className='mt-4' to='/signup'>
              <button className='btn btn-outline-dark fs-5'>
                Register Here
              </button>
            </Link>
          </div>
          <p className='mt-5 mb-3 text-muted'>© 2021 – 2022</p>
        </form>
      </main>
    </div>
  )
}

export default Login
