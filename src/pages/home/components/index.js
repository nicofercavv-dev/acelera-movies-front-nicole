import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Note = ({ note }) => {
  const noteArr = [1, 2, 3, 4, 5]
  return (
    noteArr.map(element => {
      return element <= note
        ? <FontAwesomeIcon icon={faStar} color={'#F7C325'} key={element} />
        : <FontAwesomeIcon icon={faStar} color={'#E3E8ED'} key={element} />
    })
  )
}

export default Note
