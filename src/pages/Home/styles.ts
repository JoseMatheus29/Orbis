import styled from 'styled-components';

export const Section = styled.section`  
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
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
        margin-bottom: 16px;
    }

    button + button {
        margin-left: 20px;
    }

    img {
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
