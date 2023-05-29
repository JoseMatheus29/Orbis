import styled from "styled-components";

export const Stages = styled.div`

.meuBotao{
    width: 145px;
  height: 145px;
  border-radius: 50%;
  border: none;
  background-color: #DADADA;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505D68;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  flex-direction: row;
}

.Projetar{
    display: flex;
    align-self: flex-end;
}
  /* Definindo o estilo inicial do quadrado explicativo */
.quadradoExplicativo {
  position: absolute;
  /* top: 0;
  left: 0;
  opacity: 0; */
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
.meuBotao {
  transition: transform 0.3s ease-out;
}

.meuBotao:hover {
  transform: translateX(10px); /* Ajuste a quantidade de deslocamento horizontal aqui */
}

.meuBotao:focus + .quadradoExplicativo {
  animation: slideIn 0.3s ease-out;
  opacity: 1;
}

`;