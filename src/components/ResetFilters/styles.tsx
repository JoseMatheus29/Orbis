import styled from 'styled-components';

export const ResetFiltersStyle = styled.div`
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
    font-weight: 600;
    color: var(--text);
    font-size: 1rem;
    margin: 16px 0;


    img {
        margin-right: 10px;
    }

    &.opacity {
        cursor: default;
        opacity: 0.3;
    }
`