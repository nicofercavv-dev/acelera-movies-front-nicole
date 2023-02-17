import styled from 'styled-components'

const MovieForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;

  div {
    width: 50%;
    margin-bottom: 20px;
  }

  label {
    display: block;
    width: 90%;
    padding: 0 0 0 10px;
  }

  input {
    display: block;
    width: 90%;
    height: 80%;
    margin: auto;
    border: 1px solid #C5CED6;
    border-radius: 3px;
  }

  .textarea-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      width: 95%;
      padding: 0;
    }
  }
  textarea {
    border: 1px solid #C5CED6;
    width: 95%;
    border-radius: 3px;
  }

  select {
    display: block;
    margin: 0 auto;
  }

  div > select {
    width: 90%;
    height: 80%;
    border: 1px solid #C5CED6;
    border-radius: 3px;
  }

  .submit {
    width: 95%;
    height: 1.75rem;
    background-color: #1AAE9F;
    border: 1px solid #1AAE9F;
    border-radius: 3px;
    color: #FFFFFF;
    font-weight: bold;
  }
`

export default MovieForm
