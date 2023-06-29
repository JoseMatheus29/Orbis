import styled from 'styled-components';

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-top: 120px;

    h1 {
        font-family: 'Caprasimo', cursive;
        font-size: 2.25rem;
        color: var(--red_200);
        font-weight: normal;
        margin-bottom: 16px;
    }

`
export const ContainerSlider = styled.div`
    display: flex;
    flex-direction: column;

    label, h4 {
        font-weight: 700;
        margin: 12px;
        color: var(--text);
        margin-left: 0;
    }
`

export const GridCards = styled.div`
    margin: 40px 0;
    display: grid;
    grid-template-columns:  auto auto auto auto;
    gap: 24px;
`
export const Filters = styled.div`
display: flex;
flex-direction: row;
column-gap: 60px;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    button {
        margin: 0;
        padding: 12px 16px; 
    }

    button:first-child {
        border-radius: 8px 0 0 8px;
        border-right: none;
    }

    button:nth-child(2) {
        border-radius: 0;
    }

    button:nth-child(3) {
        border-radius: 0 8px 8px 0;
        border-left: none;
    }
`