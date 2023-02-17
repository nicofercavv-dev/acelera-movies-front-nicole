import styled from 'styled-components'

export const PageContainer = styled.div`
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
      cursor: pointer;
    }

  }

  main {
    background-color: #FFFFFF;

    .cabecalho {
      background-color: #E3E8ED;
      width: 95%;
      margin: 30px auto 40px auto;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1.9rem;
        padding: 10px;
      }

      .delete {
        background-color: #D3455B;
        border: 1px solid #D3455B;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;

        svg {
          color: #FFFFFF;
        }
      }
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
        margin: auto 0;
      }

      .content {
        max-height: 90%;
        width: 65%;
        margin: auto auto;
        padding: 10px;

        h2 {
          font-size: 1.3rem;
          margin-bottom: 8px;
          cursor: pointer;
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
    .genders {
      width: 100%;
      margin: 0;
      
      ul {
        max-width: 80%;
        margin: 0;
      }

      li {
        display: inline-block;
        margin-right: 15px;
        padding: 10px 15px;
        border-radius: 20px;
        background-color: #788896;
        color: #FFFFFF;
      }
    }

    .details {
      width: 100%;
      margin-top: 25px;
      p {
        margin-bottom: 10px;
      }
      span {
        font-weight: bold;
      }
    }
  }
`
