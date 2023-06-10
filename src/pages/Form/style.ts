import styled from 'styled-components';

export const Content = styled.div`
    width: 75%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .main_form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        font-size: 2.5rem;
    }

    .subtitulo{
        font-size: 1.3rem;
        font-weight: normal;
        padding-top: 25px;
    }

    .descricao{
        font-size: 1rem;
        margin: 15px 0px 23px 0px;
        line-height: 160%;
    }

    button{
        width: 100%;
    }
`