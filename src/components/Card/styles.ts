import styled, { css } from 'styled-components'
import { ICardStyle } from './types'

export const Container = styled.div<ICardStyle>`
    min-height: 330px;
    width: 240px;
    padding: 16px;
    position: relative;
    color: var(--text);
    background-color: var(--purple_100);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--purple_200);
    transition: .2s;
    box-shadow: 3px 3px 0px var(--purple_200);

    img {
        margin-bottom: 24px;
    }

    h2 {
        font-size: 1.25rem;
        margin-bottom: 4px;
        font-weight: 700;
        text-align: center;
    }

    h3 {
        text-align: center;
        font-weight: 500;
    }

    div {
        position: absolute;
        height: 30px;
        padding: 4px 16px;
        border-radius: 0 0 12px 12px;
        font-size: 1rem;
        font-family: 'Raleway';
        font-style: 700;
        color: #fff;
        font-weight: 700;
        background: var(--purple_200);
        top: 0px;
    }
    ${({variant}) => variant === "analyzes" && css`
       background-color: var(--purple_100);
       border: 3px solid var(--purple_200);
       box-shadow: 3px 3px 0px var(--purple_300);
    `}
    ${({variant}) => variant === "design" && css`
       background-color: var(--yellow_100);
       border: 3px solid var(--yellow_300);
       box-shadow: 3px 3px 0px var(--yellow_400);
       div{
        background-color: var(--yellow_300);
       }
    `}
    ${({variant}) => variant === "evaluate" && css`
        background-color: var(--blue_100);
        border: 3px solid var(--blue_200);
        box-shadow: 3px 3px 0px var(--blue_300);
        div{
            background-color: var(--blue_200);
        }
    `}
`