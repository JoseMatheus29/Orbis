import { styled } from "styled-components";

export const Container = styled.div`
    .MuiAutocomplete-root {
        border-radius: 8px;
        border: 5px solid var(--red_200);
        background: var(--red_100);
        padding: 4px;
        background-color: var(--white);
        width: 240px;
        border-radius: 4px;
        font-family: 'Raleway', sans-serif;

        display: flex;
        align-items: center;
    }

    .MuiInputBase-root {
        border: none;

        input {
            margin-bottom: 24px;
        }
    }
`