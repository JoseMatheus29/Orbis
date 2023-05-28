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
      font-size: 3.2rem;

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

    .o_que{
        background-color: #F2F5F7;
    }

    .o_que_titulo{
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 30px;
    }

    .container_o_que{
        margin: 0 75px;
        padding: 50px 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        gap: 2rem;
    }

    .sobre{
        background-color: #F2F5F7;
    }

    .sobre_titulo{
        font-size: 1.5rem;
        margin: 0 150px;
        padding-top: 60px;
        padding-bottom: 24px;
    }

    .sobre_paragrafo{
        font-size: 1rem;
        width: 50%;
        margin: 0 150px;
    }

    .idealizadoras{
        font-size: 1.25rem;
        margin: 24px 150px;
    }

    .professoras{
        margin: 86px 148px;
        display: flex;
        align-items: center;
        gap: 31px
    }
    .tici{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .valeska{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .professora_titulo{
        font-size: 1.25rem;
    }

    

`
export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
`