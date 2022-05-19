import React, { useState } from 'react'
import Bird from './Bird'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'
import importImg from '../../images/image_logo.png'
import { useNavigate } from 'react-router-dom'
import { PeopleIcon } from '@primer/octicons-react'
const BirdsInformation = () => {
  const { data: birds, loading } = useApi('/BirdsInformation/read')
  const [filtered, setFiltered] = useState([])
  let navigate = useNavigate()
  if (loading) return <Loading />
  console.log(birds)

  return (
    <div className='row container-fluid'>
      <div
        className='text-center col-md-2 px-0 bg-dark border-1 rounded-top border text-white border-dark my-2'
        Style='min-height:100vh'
      >
        <div className='px-4 py-2 '>
          <h2 className='fs-4 pb-2  border-white border-bottom fw-bold text-center'>
            Result Filters
          </h2>

          <div className='row '>
            <div className='row fw-bold '>
              <div className='col fs-5 mb-2'>Category</div>
            </div>
            <div class=' row dropdown'>
              <button
                class='border border-white text-white btn dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Select Category
              </button>
              <ul
                class='dropdown-menu'
                id='drop'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className='row '>
            <div className='row fw-bold '>
              <div className='col fs-5 mb-2'>Size</div>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
              <label class='form-check-label' for='flexCheckDefault'>
                Small Size Birds
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckChecked'
              />
              <label class='form-check-label' for='flexCheckChecked'>
                Medium Size Birds
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckChecked'
              />
              <label class='form-check-label' for='flexCheckChecked'>
                Large Size Birds
              </label>
            </div>
          </div>
          <hr />
          <button className='btn btn-outline-light mx-4' type='submit'>
            Apply Filter
          </button>

          <div class='crop ' Style='margin-top:100px'>
            <img src={importImg} alt='Donald Duck' />
          </div>
          <div className='row text-center'>
            <h3 className='fw-bold fs-4 text-uppercase'>Awan Birds Care</h3>
          </div>
        </div>
      </div>

      <div className='col-md-10 col-xl-10  py-3'>
        <div className='row justify-content-between'>
          <ol class='breadcrumb col-4 px-3'>
            <li class='breadcrumb-item'>
              <a href='/'>Home</a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Birds Information
            </li>
          </ol>
          <form className='d-flex col-4 mb-5'>
            <input
              className='form-control me-2'
              type='search'
              id='sear'
              placeholder='Search'
              aria-label='Search'
            />

            <button
              className='btn btn-dark'
              type='submit'
              onClick={() => {
                var myText = document.getElementById('sear').value
                navigate('/search/BirdsInformation/' + myText)
              }}
            >
              Search
            </button>
          </form>
        </div>

        <div>
          <h1 className='fs-2 fw-bold'>Birds Information</h1>
        </div>
        <div className='container-fluid'>
          <section className=' d-flex row justify-content-between '>
            {birds.map((b) => {
              return <Bird key={b.id} {...b} />
            })}
          </section>
        </div>
      </div>
    </div>
  )
}

export default BirdsInformation
