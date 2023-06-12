import styled from 'styled-components'

export const Container = styled.div`
    min-height: 330px;
    width: 260px;
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
    border: 3px solid #505D68;
    transition: .2s;
    
    &:hover {
        box-shadow: 3px 3px 0px #505D68;
    }

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
        top: 0px;
    }
`