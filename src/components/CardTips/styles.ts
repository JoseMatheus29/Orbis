import styled, {css} from 'styled-components'
import { ICardStyle } from './types'



export const Container = styled.div<ICardStyle>`
    margin-bottom: 100px; 
    padding: 16px;
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
    padding-left: 60px;
    position: relative;

    img {
        width: 180px;
        position: absolute;
        left: -120px;
        bottom: -50px;
    }

    p {
        font-weight: 500;
        line-height: 160%;
    }
    h4{  
        margin-bottom: 8px;
        font-family: 'Raleway', sans-serif;
        ${({variant}) => variant === "analyzes" && css`
            color:var(--purple_200);
        `}
        ${({variant}) => variant === "design" && css`
            color:var(--yellow_300);
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
            background-color: var(--yellow_100);
            border: 3px solid var(--yellow_300);
            box-shadow: 3px 3px 0px var(--yellow_400);
        `}
        ${({variant}) => variant === "evaluate" && css`
            background-color: var(--blue_100);
            border: 3px solid var(--blue_200);
            box-shadow: 3px 3px 0px var(--blue_200);
        `}   
      

`


