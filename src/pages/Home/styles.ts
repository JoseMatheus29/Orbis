import styled from 'styled-components';

export const Inicio = styled.div`
    .main_home{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section_home{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 50%;
        margin: 100px;
    }

    .titulo_orbis{
      font-size: 2.5rem;

    }

    .subtitulo{
        font-size: 2rem;
    }

    .description{
        font-size: 1rem;
    }

    .img_orbis_home{
        margin: 50px;
    }

    .seta_home{
        display: flex;
        justify-content: center;
        margin: 50px;
    }

    

    

`
export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
`