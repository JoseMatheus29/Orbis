import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;


  #section-form {
    top: 0;
    width: 100%;
    position: absolute;
    z-index: -1;
  }

  .MuiFormControlLabel-root	{
    display: flex;
    align-items: center;
  }

  .label-form .MuiFormControlLabel-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
      margin-bottom: 8px;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

export const Content = styled.div`
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      margin-bottom: 60px;

      span {
        color: var(--red_200);
        font-weight: 700;
      }
    }
`

