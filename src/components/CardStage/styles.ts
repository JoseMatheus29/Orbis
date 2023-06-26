import styled, { css } from 'styled-components';

interface IContainerStyle{
    template: string;
}

export const Container = styled.div<IContainerStyle>`
    display: flex;
    justify-content: space-between;
    column-gap: 5%;
    margin-bottom: 24px;

    padding: 60px;
    border-radius: 20px;
    
    ${({template}) => template === "analyses" && css`
        background-color: var(--purple_100);
        border: 4px solid var(--purple_200);
        box-shadow: 4px 4px 0px 0px var(--purple_200);

        h1 {
        color: var(--purple_200);
        text-align: left;
        }
    `}

    ${({template}) => template === "design" && css`
        background-color: var(--yellow_100);
        border: 4px solid var(--yellow_300);
        box-shadow: 4px 4px 0px 0px var(--yellow_300);

        h1 {
        color: var(--yellow_300);
        text-align: left;
        }
    `}

    ${({template}) => template === "evaluate" && css`
        background-color: var(--blue_100);
        border: 4px solid var(--blue_200);
        box-shadow: 4px 4px 0px 0px var(--blue_200);

        h1 {
        color: var(--blue_200);
        text-align: left;
        }
    `}
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`