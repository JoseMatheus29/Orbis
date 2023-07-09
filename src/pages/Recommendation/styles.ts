import styled from 'styled-components';

export const Content = styled.div`
    width: 80%;
    padding-top: 75px;
    max-width: 1440px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Finish = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 24px;


    #finish-text {
        position: absolute;
        bottom: 0;
    }
`

export const RecommendationContainer = styled.div`
    margin-top: 70px;
    padding: 40px;
    width: 100%;
    background: var(--white);
    border-radius: 16px;
    border: 2px solid var(--text);
    box-shadow: 6px 6px 0px 0px var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

    h1 {
        font-size: 4rem;
        margin-bottom: 16px;
        font-family: Caprasimo;
        line-height: 120%;
        color: var(--text);
    }

    p {
        font-size: 1rem;
        line-height: 160%;
        text-align: center;
        margin-bottom: 24px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    align-items: center;
    
    div {
        margin-bottom: 40px;
    }

    button {
        width: 220px;
    }
`