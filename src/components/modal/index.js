import React, { useState } from 'react'
import CreateMovieForm from '../create-form'
import ButtonModal from '../modal-button'
import { ModalContainer } from './styled'

const Modal = ({ type }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <ButtonModal type='add' className='open' onClick={() => setToggle(toggle => !toggle)}>Clique aqui!</ButtonModal>
      {toggle &&
        <ModalContainer>
          <div className='modal'>
            {type === 'createMovie' &&
              <CreateMovieForm onClick={() => setToggle(toggle => !toggle)} />
            }
          </div>
        </ModalContainer>
      }
    </>
  )
}

export default Modal
