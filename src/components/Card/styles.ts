import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    max-width: 240px;
    padding: 16px;
    position: relative;
    color: #424B5A;
    background-color: #ECECEC;
    border-radius: 8px;
    border-bottom: 10px solid #424B5A;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 24px;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 8px;
        font-weight: 700;
        text-align: center;
    }

    h3 {
        font-weight: normal;
        text-align: center;
    }

    button {
        position: absolute;
        padding: 4px 16px;
        border-radius: 4px;
        font-size: 1rem;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        bottom: 10px;
    }
`