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
            color:var(--yellow_300);
        `}
        ${({variant}) => variant === "evaluate" && css`
            color:var(--blue_200);
        `}   
    }
   
`
    
export const HeaderContent = styled.div `
    display: flex;
    flex-direction: line;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    #tool-header {
        display: flex;
        flex-direction: row;
        column-gap: 20px;
    }

    img {
    }

    div {
        width: 100%;
        h1 {
            font-weight: 600;
            width: 300px;
        }
    }

    button {
        width: 200px;
    }
`

export const ItensContent = styled.div<IToolStyle>`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    div{
        
        #WhyUseTitle{
            margin-top: 10px;
            margin-left: 30px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            ${({variant}) => variant === "analyzes" && css` color:var(--purple_300);`}
            ${({variant}) => variant === "design" && css`color:var(--yellow_300);`}
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
            margin: 0 auto;
            display: flex;
            margin-top: 30px; 
            margin-bottom: 24px;
            width: 75%;
            max-height: 350px;
        }
        #alert{
            display: flex;
            flex-direction: row;
            align-items: center;
            line-height: 160%;
            margin-left: 30px;
            padding: 8px 12px;
            margin-top: 20px;
            
            border-radius: 8px;
            
            background-color: var(--red_100);
            font-family: 'Raleway', sans-serif;   

            p {
                color: var(--red_200);
            }
        }
        #imgAlert{
            width:40px;
            height:40px;
            margin-right: 12px;
        }
        #NoImgAlert{
            display: none;
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

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    margin-bottom: 32px;

    a {
        color: var(--text);
        font-weight: 600;
        
    }
`

