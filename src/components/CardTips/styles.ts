import styled, {css} from 'styled-components'
import { ICardStyle } from './types'



export const Container = styled.div<ICardStyle>`
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    height: 125px;
    width: 881px;
    color: var(--text);
    transition: .2s;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--yellow_100);
    border: 3px solid var(--purple_200);
    box-shadow: 3px 3px 0px var(--purple_200);
    h4{  
        font-family: 'Raleway', sans-serif;
        ${({variant}) => variant === "analyzes" && css`
            color:var(--purple_200);
        `}
        ${({variant}) => variant === "design" && css`
            color:var(--yellow_200);
        `}
        ${({variant}) => variant === "evaluate" && css`
            color:var(--blue_200);
        `}   
    }
        ${({variant}) => variant === "analyzes" && css`
            background-color: var(--purple_100);
            border: 3px solid var(--purple_200);
            box-shadow: 3px 3px 0px var(--purple_200);
        `}
        ${({variant}) => variant === "design" && css`
            background-color: var(--yello_100);
            border: 3px solid var(--yello_200);
            box-shadow: 3px 3px 0px var(--yello_200);
        `}
        ${({variant}) => variant === "evaluate" && css`
            background-color: var(--blue_100);
            border: 3px solid var(--blue_200);
            box-shadow: 3px 3px 0px var(--blue_200);
        `}   
      

`


