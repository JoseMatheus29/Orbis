import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    padding: 16px;
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
    }

    h3 {
        font-weight: normal;
    }
`