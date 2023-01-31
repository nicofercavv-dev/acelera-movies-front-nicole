import React from 'react'
import { AddMovie, EditMovie } from './styled'
const ButtonModal = ({ type, onClick = x => x }) => {
  return (
    <>
      {
        type === 'add' &&
        <AddMovie onClick={onClick}>Add movie</AddMovie>
      }
      {
        type === 'edit' &&
        <EditMovie>E</EditMovie>
      }
    </>
  )
}

export default ButtonModal
