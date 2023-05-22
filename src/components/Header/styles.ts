import styled from "styled-components";

export const Container = styled.div`
    background-color: #F2F5F7;
    height: 75px;
    display: flex;
    align-items: center;

    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 75%;
    }

    .logo{
        display: flex;
        gap: 10px;
    }

    nav ul {
        display: flex;
        gap: 30px;
    }
    
    nav ul li a{
        font-size: 1rem;
        color: #505D68;
    }

    

`