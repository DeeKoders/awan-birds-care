import React from 'react'
import Bird from './Bird'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'
import importImg from '../../images/image_logo.png'
const BirdsInformation = () => {
  const { data: birds, loading } = useApi('/read')

  if (loading) return <Loading />
  console.log(birds)

  return (
    <div className='row container-fluid'>
      <div className='border-bottom-0 border-1 rounded-top border border-dark py-2  col-md-2 px-4 '>
        <h2 className='fs-4 pb-2 text-uppercase border-dark border-bottom fw-bold text-center'>
          Result Filters
        </h2>

        <div className='row '>
          <div className='row fw-bold '>
            <div className='col fs-5 mb-2'>Category</div>
          </div>
          <div class=' row dropdown'>
            <button
              class='border border-dark  btn dropdown-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Select Category
            </button>
            <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
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
        <button className='btn btn-dark mx-5' type='submit'>
          Apply Filter
        </button>

        <div class='crop'>
          <img src={importImg} alt='Donald Duck' />
        </div>
        <div className='row text-center'>
          <h3 className='fw-bold fs-4 text-uppercase'>Awan Birds Care</h3>
        </div>
      </div>

      <div className='col-md-9 bg-opacity-100  py-3 px-4'>
        <ol class='breadcrumb'>
          <li class='breadcrumb-item'>
            <a href='/'>Home</a>
          </li>
          <li class='breadcrumb-item active' aria-current='page'>
            Birds Information
          </li>
        </ol>
        <div>
          <h1 className='fs-2 fw-bold'>Birds Information</h1>
        </div>
        <div>
          <section className=' birdlist'>
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
