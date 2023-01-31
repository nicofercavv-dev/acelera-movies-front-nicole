import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #F2F5F7;
    border: 2px solid #C3CFD9;
    width: 23%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px 30px 40px;

    label {
      width: 100%;
      margin-top: 10px;
      text-align: left;
      font-weight: bold;
      font-size: .9rem;
      color: #4B5C6B;
    }

    .input-container {
      width: 100%;
      height: 20%;
      border: none;
      position: relative;
      border: 2px solid #C3CFD9;
      border-radius: 5px;

      &:focus-within {
        border: 2px solid #6558F5;
      }

      #login, #password {
        border: none;
        width: 100%;
        height: 100%;
        padding-left: 20%;
      }
    }

    .input-container svg {
      width: 20%;
      color: #788896;
      position: absolute;
      top: 25%;
    }

    a {
      color: #2C88D9;
      margin: 5px 0px 10px 0px;
      font-weight: 600;
    }

    button {
      font-size: 1rem;
      font-weight: 600;
      width: 100%;
      height: 20%;
      border: 2px solid #ABCEEC;
      color: #2C88D9;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`
