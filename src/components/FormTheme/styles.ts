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

  .radio-group {
    column-gap: 25px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
  }

  .MuiFormControlLabel-root	{
    display: flex;
    align-items: center;
  }

  .MuiRadio-root {
    color: var(--text)!important;
  }

  .label-form .MuiFormControlLabel-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #analyses-orbis {
      width: 175px;
    }

    #motion-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      margin-bottom: 8px;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .MuiTimelineDot-root {
    width: 35px;
    height: 35px;
    margin:0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    box-shadow: none;
    color: var(--red_200);
    border: 2px solid var(--red_200);
    background: var(--white);
  }

  #dot-active {
    color: var(--white);
    background-color: var(--red_200);
    
  }

  .MuiTimelineConnector-root {
    height: 50px;
    background: var(--red_200);
  }

  #last-connector {
    background: transparent;
  }

  .MuiTimelineContent-root {
    h4 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

`

export const Content = styled.div`
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 75px; 
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      margin-bottom: 60px;
      text-align: center;
      line-height: 120%;

      span {
        color: var(--red_200);
        font-weight: 700;
      }
    }

    a {
      color: var(--text);
      font-weight: 700;
      text-decoration: underline;

      img {
        margin-right: 4px;
      }
    }

    #nav-form {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    .MuiTimelineItem-root {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    
    }
    .css-ha3bif-MuiTimelineItem-root:before {
      padding: 0;
    }

    .timeline-form {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      left: 0;
    }

`

