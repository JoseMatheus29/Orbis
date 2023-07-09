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
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    .logo a{
        cursor: pointer;
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
    justify-content: center;
    gap: 30px;
    height: 75px;
    

    li{
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }

    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        margin-bottom: 24px;
        left: 0;
        background-color: var(--white);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

`
