import React, { useState, useEffect } from 'react'
import { HomeContainer } from './styled'
import Modal from '../../components/modal/index'
import { client } from '../../service/client'
import Note from './components'
import formatDate from '../../utils/dateFormatter'

const HomePage = () => {
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
    <HomeContainer>
      <menu>
        <div className='greeting'>
          <p>Hello, User!</p>
        </div>
        <Modal type='createMovie' />
      </menu>
      <main>
        <h1>All Movies</h1>
        <section>
          {data && data.map(movie => {
            return <div className='movie-container' key={movie.id}>
              <img src={movie.image}/>
              <div className='content'>
                <h2>{movie.title}</h2>
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
    </HomeContainer>
  )
}

export default HomePage
