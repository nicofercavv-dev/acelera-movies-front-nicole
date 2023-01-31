import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;

  menu {
    background-color: #F2F5F7;
    display: flex;
    flex-direction: column;
    align-items: center;

    .greeting {
      background-color: #CED8E0;
      width: 100%;
      height: 15%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 30px;
    }

    .greeting p {
      max-width: 100%;
      font-size: 1.2rem;
    }

  }

  main {
    background-color: #FFFFFF;

    h1 {
      background-color: #E3E8ED;
      width: 95%;
      margin: 30px auto 40px auto;
      font-size: 1.9rem;
      padding: 10px;
    }

    section {
      width: 95%;
      margin: 0 auto;
    }

    .movie-container {
      width: 100%;
      height: 40vh;
      display: flex;
      margin-bottom: 30px;

      img {
        max-height: 90%;
        margin: auto auto;
      }

      .content {
        max-height: 90%;
        max-width: 65%;
        margin: auto auto;

        h2 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .date {
          color: #2C88D9;
          margin-bottom: 20px;
          font-weight: bold;
        }

        h3 {
          margin-bottom: 10px;
        }
      }

      .note {
        max-height: 90%;
        margin: 20px auto;
      }
    }
  }
`
