import { Container } from "./styles";
import alertModal from "../../assets/icon/alertModal.svg";
interface IExtraMaterials {
    name: string;
}

const ExtraMaterials = ({ name }: IExtraMaterials) => {
  return (
    <>
      { name === "Avaliação heurística" ? (<Container>
        <h2>Seminário sobre Avaliação Heurística</h2>
        <h3>Por Célula Multimídia</h3>
        <p>
          A avaliação heurística tem como base um conjunto de diretrizes de
          usabilidade, que descrevem as características desejáveis de uma
          interação e interface. Nesse seminário, foi mencionada a existência de
          diversos grupos de heurísticas, cada uma servindo para diferentes
          estilos e domínios de interação. Porém, as 10 Heurísticas de Nielsen
          tiveram foco durante a explicação, em razão de serem as heurísticas
          iniciais propostas por Jackob Nielsen, criador desse tipo de método
          avaliativo, além de sua amplitude de aplicabilidade, servindo para
          diversos tipos de interface.
        </p>
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/G-0ZTugj6Fw"
        ></iframe>
      </Container>) :
      <div id={"alert"}>
        <img id={'imgAlert'} src={alertModal}/>
        <p>Conteúdo em breve disponível</p>
        </div>
      }
    </>
  );
};

export default ExtraMaterials;
