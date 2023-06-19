import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonStyle = styled.button<IButtonStyle>`
    position: relative;
    background-color: #505D68 ;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: .2s;
    margin: 1%;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
   ${({variant}) => variant === "primary" && css`
       background-color: var(--background);
       border: 2px solid #424B5A;
       color: #424B5A;
       box-shadow:  5px 5px 0 0 white, 5px 5px 0 2px #424B5A;

       &:hover {
            background-color: var(--purple_200);
       }

       &:active{
        background-color: var(--purple_300);
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
       }
    `}

    ${({variant}) => variant === "secundary" && css`
       background-color: var(--purple_300);
       border: 2px solid #424B5A;
       color: var(--white);
       box-shadow:  5px 5px 0 0 white, 5px 5px 0 2px #424B5A;

       &:hover {
            background-color: var(--purple_300);
            color: #fff;
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