import styled from "styled-components";

export const Stages = styled.div`
.botao{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5%;
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
    transform: translateX(-100%);
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