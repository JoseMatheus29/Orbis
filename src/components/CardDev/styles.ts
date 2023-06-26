import { styled } from "styled-components";

export const Container = styled.div`
    border: 3px solid var(--text);
    border-radius: 20px;
    background-color: var(--purple_100);
    box-shadow: 3px 3px 0px var(--text);
    min-height: 400px;
    width: 280px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img {
        width: 90%;
        margin-bottom: 12px;
    }

    h2 {
        font-weight: 600;
    }
`