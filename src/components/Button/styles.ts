import styled, { css } from 'styled-components';
import { IButtonStyle } from './types';

export const ButtonStyle = styled.button<IButtonStyle>`
    position: relative;
    background-color: #505D68;
    border-radius: 8px;
    padding: 16px 24px;
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: .2s;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    ${({variant}) => variant === "secondary" && css`
       background-color: transparent;
       border: 2px solid #424B5A;
       color: #424B5A;

       &:hover {
            background-color: #424B5A;
            color: #fff;
       }
    `}
`