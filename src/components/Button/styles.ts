import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonStyle = styled.button<IButtonStyle>`
    position: relative;
    border-radius: 8px;
    padding: 12px 8px;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: var(--text);
    border: 2px solid var(--text);
    background: var(--white);
    cursor: pointer;
    transition: .2s;
    box-shadow: 5px 5px var(--white), 8px 8px var(--text);
    

    

   ${({variant}) => variant === "primary" && css`
       background-color: var(--background);
       border: 2px solid var(--red_200);
       color: var(--text);
       box-shadow:  5px 5px 0 0 var(--red_200);

       &:hover {
            background-color: var(--red_100);
       }
    `}

    ${({variant}) => variant === "secondary" && css`
       background-color: var(--white);
       border: 2px solid var(--text);
       color: var(--text);
       box-shadow:  5px 5px 0 0 var(--text);

       &:hover {
            background-color: var(--red_100);
       }

       &:active{
        background-color: var(--purple_300);
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
       }
    `}

    

    ${({variant}) => variant === "terciary" && css`
       background-color: #FDBC42;
       border: 2px solid #EA9B1D;
       color: #424B5A;
       box-shadow:  5px 5px 0 0 #EA9B1D;

       &:hover {
            background-color: #fff;
            color: #474747;
       }

       &:active{
        background-color: #FDBC42;
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
       }
    `}
`