const formatDate = (date) => {
  let dateFormatted = new Date(date)
  dateFormatted = dateFormatted.toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' })
  return dateFormatted
}

export default formatDate
