import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  padding-top: 7%;
  overflow: auto;

  .modal {
    background-color: white;
    max-width: 35%;
    max-height: 95%;
    margin: 0 auto;
    padding: 20px 25px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 40%);
    border-radius: 3px;
  }

  .modal header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`
