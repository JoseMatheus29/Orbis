import O_que from "../../assets/o_que.svg"
import { OqueEdcu, Stages } from "./styles"

const DCU = () => {
    return(
        <OqueEdcu>
            <section className="o_que">
                <div className="o_que_titulo"><h2>O que é Design Centrado no Usuário?</h2></div>
                <div className="container_o_que">
                    <div className="o_que_img"> <img src={O_que} alt="" /> </div>
                    <div className="o_que_titulo1"><p>Donald Norman, pesquisador de ciência cognitiva e um dos maiores influenciadores sobre design, defende que um bom design requer uma comunicação clara entre pessoas e as máquinas e sistemas que elas precisam utilizar no cotidiano.</p></div>
                    <div className="o_que_titulo2"><p>Com base nessa ideia, ele criou o termo Design Centrado no Usuário (DCU), uma abordagem de design em que a construção de soluções de design vão de encontro às necessidades dos usuários.</p></div>
                </div>
            </section>
        </OqueEdcu>
    )
        
}
export default DCU

export const Etapas = () => {
    return (
      <Stages>
      <div className="botao">
          <div className="triangularBottom1">
            <button className="meuBotaoA ">Analisar</button>
          </div>
          <div className="triangularBottom2">
          <button className="meuBotaoP ">Projetar</button>
          <button className="meuBotaoAV ">Avaliar</button>
          </div>
          <div className="quadradoExplicativo">Texto explicativo</div>
      </div>
      </Stages>
    );
  }