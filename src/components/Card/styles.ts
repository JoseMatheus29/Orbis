import styled, { css } from 'styled-components'
import { ICardStyle } from './types'

export const Container = styled.div<ICardStyle>`
    min-height: 330px;
    width: 260px;
    padding: 16px;
    position: relative;
    color: #424B5A;
    background-color: #DCD6F0;
    border-radius: 20px;
    border-bottom: 10px solid #725AC1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #725AC1;
    transition: .2s;
    box-shadow: 3px 3px 0px #725AC1;

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

    div {
        position: absolute;
        gap: 10px;
        height: 30px;
        padding: 4px 16px;
        border-radius: 0 0 20px 20px;
        font-size: 1.2rem;
        font-family: 'Ubuntu';
        font-style: normal;
        color: #fff;
        font-weight: 500;
        background: #725AC1;
        top: 0px;
    }
    ${({variant}) => variant === "analyzes" && css`
       background-color: var(--purple_100);
       border: 2px solid var(--purple_300);
       box-shadow: 3px 3px 0px var(--purple_400);
    `}
    ${({variant}) => variant === "design" && css`
       background-color: var(--yellow_100);
       border: 2px solid var(--yellow_300);
       box-shadow: 3px 3px 0px var(--yellow_400);
       div{
        background-color: var(--yellow_300);
       }
    `}
    ${({variant}) => variant === "evaluate" && css`
        background-color: var(--blue_100);
        border: 2px solid var(--blue_300);
        box-shadow: 3px 3px 0px var(--blue_400);
        div{
            background-color: var(--blue_300);
        }
    `}
`