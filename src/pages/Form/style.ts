import styled from 'styled-components';

export const Content = styled.div`
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;



    .main_form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .img_orbis_form{
        width: 60%;
    }

    .img_orbis_form img{
       width: 90%;
    }

    .texto_form{
        width: 45%;
    }

    .titulo_orbis{
        font-size: 2.75rem;
        font-family: "Caprasimo", cursive;
        font-weight: normal;
        color: var(--red_200);
        margin-bottom: 16px;
    }

    .subtitulo{
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 16px;
    }

    .descricao{
        font-size: 1rem;
        line-height: 160%;
        margin-bottom: 28px;
    }

    button{
        width: 100%;
    }
`