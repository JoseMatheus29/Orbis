import styled, { css } from 'styled-components'
import { IToolStyle } from './types'

export const Content = styled.div<IToolStyle>`
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
    h1{  
        font-family: 'Raleway', sans-serif;
        ${({variant}) => variant === "analyzes" && css`
       color:var(--purple_300);
        `}
        ${({variant}) => variant === "design" && css`
            color:var(--yellow_200);
        `}
        ${({variant}) => variant === "evaluate" && css`
            color:var(--blue_200);
        `}   
    }
    #StageOfTool {
        width: 8%;
        margin-left:16%;
        height: 30px;
        padding: 6px 20px;
        border-radius: 0 0 12px 12px;
        font-size: 1rem;
        font-family: 'Raleway';
        font-style: 700;
        color: #fff;
        font-weight: 700;
        top: 0px;
        ${({variant}) => variant === "analyzes" && css`
            background: var(--purple_200);

        `}
        ${({variant}) => variant === "design" && css`
            background: var(--yellow_200);


        `}
        ${({variant}) => variant === "evaluate" && css`
            background: var(--blue_200);
        `}
    }
`
    
export const HeaderContent = styled.div `
    display: flex;
    flex-direction: line;
    #Button{
        margin-left:50%;
    }
`

export const ItensContent = styled.div<IToolStyle>`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    div{
        #WhyUseTitle{
            font-weight: bold;
            margin-top: 10px;
            margin-left: 30px;
            font-family: 'Raleway', sans-serif;
            ${({variant}) => variant === "analyzes" && css` color:var(--purple_300);`}
            ${({variant}) => variant === "design" && css`color:var(--yellow_200);`}
            ${({variant}) => variant === "evaluate" && css`color:var(--blue_200);`} 
           
        }  
        #WhyUseText{
            margin-left: 30px;
            margin-top: 10px;
            font-family: 'Raleway', sans-serif;
            color:var(--text)
        }
        
    }
`

export const Steps = styled.div`
    margin-top: 16px;

    h2 {
        margin: 10px 0;
    }
`

