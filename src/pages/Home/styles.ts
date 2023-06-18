import styled from 'styled-components';

export const Main = styled.main`  
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
    column-gap: 30px;
    color: #505D68;

    h1 {
      font-size: 5rem;
      margin-bottom: 8px;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: 16px;
    }
    p {
        font-size: 1rem;
        line-height: 160%;
        margin-bottom: 24px;
    }

    button {
        width: 50%;
    }

    button + button {
        margin-left: 20px;
    }

    img {
        width: 50%;
    }
`
export const Section = styled.section`
    background-color: #F2F5F7;
    padding: 60px 0;    

    h1 {
        font-size: 3rem;
        font-weight: 500;
    }
`
export const TextsRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    align-items: center;

    p {
        line-height: 160%;
        font-size: 1rem;
        font-weight: 400;
    }
`

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
`
export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`