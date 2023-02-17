import React, { useState, useEffect } from 'react'
import { PageContainer } from './styled'
import Modal from '../../components/modal/index'
import { client } from '../../service/client'
import Note from './components'
import formatDate from '../../utils/dateFormatter'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    client.get('/movie')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [])

  return (
    <PageContainer>
      <menu>
        <div className='greeting'>
          <p onClick={() => navigate('/home')}>Hello, User!</p>
        </div>
        <Modal type='createMovie' />
      </menu>
      <main>
        <div className='cabecalho'>
          <h1>All Movies</h1>
        </div>
        <section>
          {data && data.map(movie => {
            return <div className='movie-container' key={movie.id}>
              <img src={movie.image}/>
              <div className='content'>
                <h2 onClick={() => navigate(`/movie/${movie.id}`)}>{movie.title}</h2>
                <p className='date'>Data: {formatDate(movie.releaseDate)}</p>
                <h3>Resume:</h3>
                <p className='resume'>{movie.resume}</p>
              </div>
              <div className='note'>
                <Note note={movie.note} />
              </div>
            </div>
          })}
        </section>
      </main>
    </PageContainer>
  )
}

export default HomePage
