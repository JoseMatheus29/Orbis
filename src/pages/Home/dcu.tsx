import Imagem from "../../assets/imagem.svg";
import { Content, Section, TextsRow, Animation } from "./styles";

const DCU = () => {
  return (
    <>
      <Section>
        <Content>
          <h1>O que é Design Centrado no Usuário?</h1>

          <TextsRow>
            <img src={Imagem} alt="A imagem possui:'D' 'C' 'U' em letras coloridas " />
            <p>
              Donald Norman, pesquisador de ciência cognitiva e um dos maiores
              influenciadores sobre design, defende que um bom design requer uma
              comunicação clara entre pessoas e as máquinas e sistemas que elas
              precisam utilizar no cotidiano. Com base nessa ideia, ele criou o termo Design Centrado no Usuário
              (DCU), uma abordagem de design em que a construção de soluções de
              design vão de encontro às necessidades dos usuários.
            </p>
          </TextsRow>
        </Content>
      </Section>
    </>
  );
};
export default DCU;

export const Etapas = () => {
  return (
    <>
      <Animation>
        <h1>Processo de design centrado no usuário</h1>
        <div className="triangularBottom1">
          <button className="meuBotaoA ">Analisar</button>
        </div>
        <div className="triangularBottom2">
          <button className="meuBotaoP ">Projetar</button>
          <button className="meuBotaoAV ">Avaliar</button>
        </div>
        <div className="quadradoExplicativo">Texto explicativo</div>
      </Animation>
    </>
  );
}
