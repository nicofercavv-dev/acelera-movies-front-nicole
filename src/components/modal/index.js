import React, { useState } from 'react'
import CreateMovieForm from '../create-form'
import EditMovieForm from '../edit-form'
import ButtonModal from '../modal-button'
import { ModalContainer } from './styled'

const Modal = ({ id, type }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <ButtonModal type={type} className='open' onClick={() => setToggle(toggle => !toggle)} />
      {toggle &&
        <ModalContainer>
          <div className='modal'>
            {type === 'createMovie' &&
              <CreateMovieForm onClick={() => setToggle(toggle => !toggle)} />
            }
            {type === 'editMovie' &&
              <EditMovieForm id={id} onClick={() => {
                setToggle(toggle => !toggle)
                location.reload()
              }} />
            }
          </div>
        </ModalContainer>
      }
    </>
  )
}

export default Modal
