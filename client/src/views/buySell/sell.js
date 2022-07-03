import React, { useState } from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../../loading'
import importImg from '../../images/image_logo.png'
import SellBird from './SellBird'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'
import axios from '../../api/client'

const Sell = () => {
  const { data: birds, loading, setLoading, setData } = useApi('/BuySell/read')
  const [currentFilter, setCurrentFilter] = useState('None')
  let navigate = useNavigate()
  if (loading) return <Loading />
  console.log(birds)

  const handleFilter = async (e) => {
    setCurrentFilter(e.currentTarget.value)
    const filter = e.currentTarget.value
    setLoading(true)
    const res = await axios.get('/BirdsInformation/readBySize/' + filter)
    setData(res.data)
    setLoading(false)
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
      className='row container-fluid'
    >
      <div
        id='sidebar'
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
                type='radio'
                name='Size'
                value='Small'
                checked={currentFilter === 'Small'}
                onChange={handleFilter}
                id='small'
              />
              <label class='form-check-label' for='small'>
                Small Size Birds
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                value='Medium'
                id='medium'
                checked={currentFilter === 'Medium'}
                onChange={handleFilter}
              />
              <label class='form-check-label' for='medium'>
                Medium Size Birds
              </label>
            </div>
            <div class='form-check'>
              <input
                class='form-check-input'
                type='radio'
                value='Large'
                id='large'
                checked={currentFilter === 'Large'}
                onChange={handleFilter}
              />
              <label class='form-check-label' for='large'>
                Large Size Birds
              </label>
            </div>
          </div>
          <hr />
          <button
            className='btn btn-outline-light mx-4'
            type='submit'
            onClick={async () => {
              setCurrentFilter('None')
              const res = await axios.get('/BirdsInformation/read')
              setData(res.data)
            }}
          >
            Remove Filter
          </button>

          <div class='crop ' Style='margin-top:60px'>
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
              Buy/Sell
            </li>
          </ol>
          <form className='d-flex col-4 mb-5'>
            <input
              className='form-control me-2 '
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
                navigate('/search/BuySell/' + myText)
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <h1 className='fs-2 fw-bold'>Buy & Sell</h1>
        </div>
        <div className='container-fluid'>
          <section className='row justify-content-between'>
            {birds.map((b) => {
              return <SellBird key={b.id} {...b} />
            })}
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default Sell
