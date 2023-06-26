import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--red_200);
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 2;
    width: 100%;
`

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center; 

    .logo a{
        
        h1 {
            font-family: 'Caprasimo', serif;
            font-weight: normal;
            font-size: 2.25rem;
            color: var(--white);
        }
        display: flex;
        gap: 12px;
        color: var(--white);
    }
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;


    li a{
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
    }
`
