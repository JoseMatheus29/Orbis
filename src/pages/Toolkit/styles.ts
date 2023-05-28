import styled from 'styled-components';

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
`

export const GridCards = styled.div`
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`