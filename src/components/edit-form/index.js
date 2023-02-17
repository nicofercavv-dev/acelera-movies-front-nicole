import React, { useState } from 'react'
import { client } from '../../service/client'
import MovieForm from '../movie-form/styled'

const EditMovieForm = ({ id, onClick = x => x }) => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    resume: '',
    gender: '',
    classification: '',
    image: '',
    releaseDate: '',
    director: '',
    writter: '',
    studio: '',
    actors: '',
    awards: '',
    note: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
    console.log(data)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    await client.put(`/movie/${id}`, data)
      .then(() => {
        alert('Filme editado com sucesso!')
        return onClick()
      })
      .catch(error => {
        alert(error)
        onClick()
      })
  }

  return (
    <MovieForm method='POST'>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='title' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='subtitle'>Subtitle</label>
        <input type='text' name='subtitle' id='subtitle' onChange={handleChange} />
      </div>
      <div className='textarea-cont'>
        <label htmlFor='resume'>Resume</label>
        <textarea name='resume' id='resume' onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor='gender'>Gender</label>
        <input type='text' name='gender' id='gender' onChange={handleChange} />
      </div>
      <div className='classification-cont'>
        <label htmlFor='classification'>Classification</label>
        <select name='classification' id='classification' onChange={handleChange}>
          <option value=''>Select</option>
          <option value='L'>Livre</option>
          <option value='10'>10 Anos</option>
          <option value='12'>12 Anos</option>
          <option value='14'>14 Anos</option>
          <option value='16'>16 Anos</option>
          <option value='18'>18 Anos</option>
        </select>
      </div>
      <div>
        <label htmlFor='image'>Image</label>
        <input type='text' name='image' id='image' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='releaseDate'>Release Date</label>
        <input type='date' name='releaseDate' id='releaseDate' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='director'>Director</label>
        <input type='text' name='director' id='director' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='writter'>Writter</label>
        <input type='text' name='writter' id='writter' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='studio'>Studio</label>
        <input type='text' name='studio' id='studio' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='actors'>Actors</label>
        <input type='text' name='actors' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='awards'>Awards</label>
        <input type='text' name='awards' id='awards' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='note'>Stars</label>
        <input type='text' name='note' id='note' onChange={handleChange} />
      </div>
      <button className='submit' onClick={handleClick}>Edit Movie</button>
    </MovieForm>
  )
}

export default EditMovieForm
