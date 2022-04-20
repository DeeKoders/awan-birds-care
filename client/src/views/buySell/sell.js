import React from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'
import importImg from '../../images/image_logo.png'
import SellBird from './SellBird'
const Sell = () => {
  const { data: birds, loading } = useApi('/readSell')

  if (loading) return <Loading />
  console.log(birds)

  return (
    <div className='row container-fluid'>
      <div className='col-md-2'>
        <div className='px-4 py-2 border-1 rounded-top border border-dark'>
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

          <div class='crop ' Style='margin-top:100px'>
            <img src={importImg} alt='Donald Duck' />
          </div>
          <div className='row text-center'>
            <h3 className='fw-bold fs-4 text-uppercase'>Awan Birds Care</h3>
          </div>
        </div>
      </div>

      <div className='col-md-10 col-xl-10  py-3'>
        <ol class='breadcrumb'>
          <li class='breadcrumb-item'>
            <a href='/'>Home</a>
          </li>
          <li class='breadcrumb-item active' aria-current='page'>
            Buy/Sell
          </li>
        </ol>
        <div>
          <h1 className='fs-2 fw-bold'>Buy & Sell</h1>
        </div>
        <div className='container-fluid'>
          <section className='d-flex row justify-content-center'>
            {birds.map((b) => {
              return <SellBird key={b.id} {...b} />
            })}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Sell
