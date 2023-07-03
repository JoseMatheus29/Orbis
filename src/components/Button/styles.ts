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
    box-shadow:  5px 5px 0 0 var(--white), 5px 5px 0 2px var(--text);

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
    `}

    

    ${({variant}) => variant === "analyzes" && css`
       background-color: var(--purple_100);
       color: var(--text);
       box-shadow:  5px 5px 0 0 var(--purple_200), 5px 5px 0 2px var(--text);

       &:hover {
            background-color:  var(--purple_200);
       }
    `}

    ${({variant}) => variant === "design" && css`
       background-color: var(--yellow_100);
       color: var(--text);
       box-shadow:  5px 5px 0 0 var(--yellow_200), 5px 5px 0 2px var(--text);


       &:hover {
            background-color:  var(--yellow_200);
       }
    `}

    ${({variant}) => variant === "evaluate" && css`
       background-color: var(--blue_100);
       color: var(--text);
       box-shadow:  5px 5px 0 0 var(--blue_200), 5px 5px 0 2px var(--text);


       &:hover {
            background-color:  var(--blue_200);
       }
    `}
`