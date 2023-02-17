import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { AddMovie, EditMovie } from './styled'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const ButtonModal = ({ type, onClick = x => x }) => {
  return (
    <>
      {
        type === 'createMovie' &&
        <AddMovie onClick={onClick}>Add movie</AddMovie>
      }
      {
        type === 'editMovie' &&
        <EditMovie onClick={onClick}><FontAwesomeIcon icon={faPen} /></EditMovie>
      }
    </>
  )
}

export default ButtonModal
