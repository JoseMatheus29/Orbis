
import styled from "styled-components";

export const Rodape = styled.div`
        margin-top: 60px;
        background-color: var(--red_200);
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 16px;
        column-gap: 24px;

    p {
        color: white;
        font-weight: 600;
    }

    .rodape_1{
        display: flex;
        gap: 10px;
    }

    .orbis{
        font-size: 2.25rem;
    }
    .imagem{
        width: 36px;
    }

    .rodape_2{
        font-size: 0.87rem;
    }
`