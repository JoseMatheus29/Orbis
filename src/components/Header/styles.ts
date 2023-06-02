import styled from "styled-components";

export const Container = styled.div`
    background-color: #F2F5F7;
    height: 75px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center; 

    .logo a{
        
        h1 {
            font-family: 'DM Serif Display', serif;
            font-weight: normal;
            font-size: 2.25rem;
        }
        display: flex;
        gap: 12px;
        color: #505D68;
    }
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;


    li a{
        font-size: 1rem;
        color: #505D68;
    }

    input {
        padding: 8px 12px;
        width: 240px;
        border-radius: 4px;
        outline: none;
        border: 2px solid #C2D1D9;
        color: #C2D1D9;
        font-family: 'Ubuntu', sans-serif;

    }
`
