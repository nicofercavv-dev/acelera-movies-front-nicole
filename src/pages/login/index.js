import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import { LoginContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    login: '',
    password: ''
  })

  const handleClick = async (e) => {
    e.preventDefault()
    const { login, password } = data
    if (!login || !password) {
      return alert('Invalid login or password!')
    }

    await client.post('/login', { login: login, password: password })
      .then(res => res.data.auth && navigate('/home'))
      .catch(error => alert(error))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <LoginContainer>
      <form method='POST'>
        <label htmlFor={'login'}>Login</label>
        <div className='input-container'>
        <FontAwesomeIcon icon={faUser} />
          <input type={'text'} id={'login'} name={'login'} onChange={handleChange} />
        </div>
        <label htmlFor={'password'}>Password</label>
        <div className='input-container'>
          <FontAwesomeIcon icon={faKey} />
          <input type={'password'} id={'password'} name={'password'} onChange={handleChange} />
        </div>
        <a href='#'>Esqueceu a sua senha?</a>
        <button onClick={handleClick}>Entrar</button>
      </form>
    </LoginContainer>
  )
}

export default LoginPage
