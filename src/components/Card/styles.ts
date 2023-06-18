import styled from 'styled-components'

export const Container = styled.div`
    min-height: 330px;
    width: 260px;
    padding: 16px;
    position: relative;
    color: #424B5A;
    background-color: #DCD6F0;
    border-radius: 20px;
    border-bottom: 10px solid #725AC1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #725AC1;
    transition: .2s;
    box-shadow: 3px 3px 0px #725AC1;

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
        border-radius: 0 0 8px 8px;
        font-size: 1rem;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        background: #725AC1;
        top: 0px;
    }
`