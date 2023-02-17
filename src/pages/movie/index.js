import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { client } from '../../service/client'
import formatDate from '../../utils/dateFormatter'
import Note from '../home/components'
import { PageContainer } from '../home/styled'
import Modal from '../../components/modal/index'

const MoviePage = () => {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    client.get(`movie/${id}`)
      .then(res => setMovie(res.data))
      .catch(error => alert(error))
  }, [])

  const deleteMovie = async (e) => {
    const shouldDelete = confirm('Tem certeza que quer excluir este filme?')

    if (shouldDelete) {
      await client.delete(`movie/${id}`)
      return navigate('/home')
    }
    return null
  }

  return (
    <PageContainer>
      <menu>
        <div className='greeting'>
          <p onClick={() => navigate('/home')}>Hello, User!</p>
        </div>
      </menu>
      <main>
        <div className='cabecalho'>
          <h1>{movie.title}</h1>
          <div>
            <button className='delete' onClick={deleteMovie}><FontAwesomeIcon icon={faTrash} /></button>
            <Modal id={id} type='editMovie' />
          </div>
        </div>
        <section>
          <div className='movie-container'>
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
          <div className='genders'>
            <ul>
              {movie.gender && movie.gender.split(',').map(gender => <li key={gender}>{gender}</li>)}
            </ul>
          </div>
          <div className='details'>
            <p><span>Classification</span>: {movie.classification}</p>
            <p><span>Director</span>: {movie.director}</p>
            <p><span>Writter</span>: {movie.writter}</p>
            <p><span>Actors</span>: {movie.actors &&
              movie.actors.map((actor, index) => {
                if (movie.actors.length === 1) {
                  return `${actor}`
                }
                if (index === movie.actors.length - 1 && movie.actors.length > 1) {
                  return `${actor}.`
                }
                return `${actor}, `
              })}
            </p>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}

export default MoviePage
