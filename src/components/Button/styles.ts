import styled from 'styled-components';

export const ButtonStyle = styled.button`
    position: relative;
    background-color: mediumseagreen;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 1rem;
    font-family: 'Fira Sans', sans-serif;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: .2s;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`