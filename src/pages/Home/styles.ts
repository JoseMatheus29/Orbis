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

export const About = styled.div`
    .sobre{
        background-color: #F2F5F7;
    }

    .sobre_titulo{
        font-size: 1.5rem;
        margin: 0 150px;
        padding-top: 6%;
        padding-bottom: 24px;
    }

    .sobre_paragrafo{
        font-size: 1rem;
        width: 50%;
        margin: 0 150px;
    }
    `
    
    export const Desenvolvedores = styled.div`
    .container_idealizadoras{
        background-color: #F2F5F7;
    }
    
    .container_titulo{
        font-size: 1.25rem;
        margin: 0 150px;
        padding-top: 5%;
        padding-bottom: 3%;
    }

    .sobre_paragrafo{
        font-size: 1rem;
        width: 50%;
        margin: 0 150px;
    }

    .professoras{
        margin: 50px 148px;
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
    
    .titulo{
        font-size: 40px;
    }

    .paragrafo{
        width: 50%;
    }

    .perfis{
        margin: 0 148px;
        margin-top: 37px;
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .perfis div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .nome {
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
    }
`

export const OqueEdcu = styled.div`
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
`

export const Stages = styled.div`
.botao{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5%;
}

.triangularBottom1{
  display: inline;
    flex-direction: column;
    align-items: center; 
}

.triangularBottom2{
  
}
.meuBotaoA, .meuBotaoP, .meuBotaoAV{
    width: 145px;
    height: 145px;
    border-radius: 50%;
    border: none;
    background-color: #DADADA;
    color: #505D68;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
}

.Projetar{
    display: flex;
    align-self: flex-end;
}
  /* Definindo o estilo inicial do quadrado explicativo */
.quadradoExplicativo {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    /* transform: translateX(-100%); */
    transition: opacity 0.3s ease-out;
    background-color: aliceblue;
    color: #505D68;
}

/* Definindo a animação */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Aplicando a animação ao botão */
.meuBotaoA, .meuBotaoP, .meuBotaoAV{
    transition: transform 0.3s ease-out;
}

.meuBotaoA:hover, .meuBotaoP:hover, .meuBotaoAV:hover {
    transform: translateX(10px); 
}

.meuBotaoA:focus, .meuBotaoP:focus, .meuBotaoAV:focus + .quadradoExplicativo {
    animation: slideIn 0.3s ease-out;
    opacity: 1;
}

`;