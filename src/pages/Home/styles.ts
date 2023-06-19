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
    background-color: #FFE9B0;
    padding: 74px 64px; 
    margin:  70px 125px;
    border-radius: 5%;
    border-color: #F29F19;
    box-shadow: 5px 5px 0 #F29F19;

    h1 {
        font-family: "Sansita", sans-serif;
        font-size: 3rem;
        font-weight: 500;
    }
    p{
        font-family: "Raleway", sans-serif;
    }
`
export const TextsRow = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    align-items: center;
    justify-content: center;
    

    p {
        line-height: 160%;
        font-size: 1rem;
        font-weight: 400;
    }

    img{
        width: 50%;
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

    h1{
        color: #F46142;
        font-family: 'Sansita', sans-serif;
        text-shadow: 2px 2px 0 #474747;
    }

    h2{
        color: #474747;
        font-family: 'Raleway', sans-serif;
    }

    p{
        color: #474747;
        font-family: 'Raleway', sans-serif;
    }

`
export const Animation = styled.div`

`