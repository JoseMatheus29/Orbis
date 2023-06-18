import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonStyle = styled.button<IButtonStyle>`
    position: relative;
    background-color: #505D68 ;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: .2s;
    margin: 1%;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    ${({variant}) => variant === "primary" && css`
       background-color: #F9C0B4;
       border: 2px solid #424B5A;
       color: #424B5A;
       box-shadow:  5px 5px 0 0 white, 5px 5px 0 2px #424B5A;

       &:hover {
            background-color: #fff;
            color: #474747;
       }

       &:active{
        background-color: #F9C0B4;
        box-shadow: 5px 5px #666;
        transform: translateY(4px);
       }
    `}

    ${({variant}) => variant === "secondary" && css`
       background-color: var(--background);
       border: 2px solid #424B5A;
       color: #424B5A;
       box-shadow:  5px 5px 0 0 white, 5px 5px 0 2px #424B5A;

       &:hover {
            background-color: #424B5A;
            color: #fff;
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