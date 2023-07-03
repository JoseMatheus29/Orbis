import styled, { css } from 'styled-components'
import { ICardStyle } from './types'

export const Container = styled.div<ICardStyle>`
    height: 330px;
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
   

    ${({variant}) => variant === "analyzes" && css`
       background-color: var(--purple_100);
       border: 3px solid var(--purple_200);
       
       box-shadow: 3px 3px 0px var(--purple_300);
    `}
    ${({variant}) => variant === "design" && css`
       background-color: var(--yellow_100);
       border: 3px solid var(--yellow_300);
       box-shadow: 3px 3px 0px var(--yellow_400);

    `}
    ${({variant}) => variant === "evaluate" && css`
        background-color: var(--blue_100);
        border: 3px solid var(--blue_200);
        box-shadow: 3px 3px 0px var(--blue_300);
    `}
`

export const Icons = styled.div`
    width: 100%;

`

