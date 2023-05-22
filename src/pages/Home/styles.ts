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
        margin-top: 136px;
        
    }

    .titulo_orbis{
      font-size: 3.2rem;

    }

    .subtitulo{
        font-size: 2rem;
    }

    .description{
        font-size: 1rem;
    }

    .img_orbis_home img{
        width: 709px;
        height: 135px;
        max-width: 50%;
    }
`