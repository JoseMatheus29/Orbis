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
            line-height: 160%;
            font-family: 'Raleway', sans-serif;
            color:var(--text)
        }
        #ImgTool{
         margin-left:25%;   
        }
        
    }
`

export const Steps = styled.div`
    margin-top: 16px;
    margin-bottom: 28px;
    h2 {
        margin: 10px 0;
    }
`

