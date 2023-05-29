import { Desenvolvedores } from "./styles"
import Alairton from "../../assets/foto_alairton.svg"
import Beatriz from "../../assets/foto_beatriz.svg"
import Mariana from "../../assets/foto_mariana.svg"
import Jamyle from "../../assets/foto_jamyle.svg"
import Isabelle from "../../assets/foto_isabelle.svg"
import Matheus from "../../assets/foto_matheus.svg"

import Tici_val from "../../assets/tici_val.svg"
// import Seta_b from "../../assets/seta_b_tici_val.svg"
// import Seta_c from "../../assets/seta_c_tici_val.svg"

 const Devs = () => {
    return(
        <Desenvolvedores>
            <section className="sobre">

                <div className="sobre_titulo"><h2>Sobre o Orbis</h2></div>
                <div className="sobre_paragrafo"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis neque sed quaerat sit praesentium similique? Maxime quidem dolorem illum iusto excepturi quasi iure corporis, optio, quos consequuntur voluptatum alias debitis!</p></div>
                <div className="idealizadoras"><h3>Idealizadoras</h3></div>
                <div className="sobre_paragrafo"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis neque sed quaerat sit praesentium similique? Maxime quidem dolorem illum iusto excepturi quasi iure corporis, optio, quos consequuntur voluptatum alias debitis!</p></div>
            
                <div className="professoras">
                    <div className="tici">
                        <h5 className="professora_titulo">Essa é a Ticianne Darin</h5>
                        <p>Professora Adjunta da Universidade Federal do Ceará (UFC), onde ministra disciplinas e realiza pesquisas nas áreas de Interação Humano-Computador e Design e Jogos Digitais.</p>
                        
                    </div>
                    
                    <div className="imgs_tici_val">
                        <img src={Tici_val} alt="" />
                    </div>

                    <div className="valeska">
                        <h5 className="professora_titulo">Essa é a Valeska Eduardo</h5>
                        <p>Professora Adjunta da Universidade Federal do Ceará (UFC), onde ministra disciplinas e realiza pesquisas nas áreas de Interação Humano-Computador e Design e Jogos Digitais.</p>
                    </div>
                </div>

                {/* <div className="setas">
                    <img className="seta1" src={Seta_b} alt="" />
                    <img className="seta2" src={Seta_c} alt="" />
                </div> */}

            <h3 className="sobre_titulo">Desenvolvedores</h3>
            <p className="sobre_paragrafo"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae eos neque saepe doloremque repellat fugit? Quis, nisi veniam odio magnam a itaque autem porro ratione repudiandae praesentium dolore maxime. </p>
            <div className="perfis">
                <div className="alairton">
                    <img src={Alairton} alt="" />
                    <h5 className="nome">Alairton Junior</h5>
                    <h6 className="job">Líder</h6>
                </div>
                <div className="beatriz">
                    <img src={Beatriz} alt="" />
                    <h5 className="nome">Beatriz Carvalho</h5>
                    <h6 className="job">UX UI Designer</h6>
                </div>
                <div className="mariana">
                    <img src={Mariana} alt="" />
                    <h5 className="nome">Mariana Rangel</h5>
                    <h6 className="job">UX UI Designer</h6>
                </div>
                <div className="jamyle">
                    <img src={Jamyle} alt="" />
                    <h5 className="nome">Jamyle Layla</h5>
                    <h6 className="job">Front-end Developer</h6>
                </div>
                <div className="isabelle">
                    <img src={Isabelle} alt="" />
                    <h5 className="nome">Isabelle Reinbold</h5>
                    <h6 className="job">front-end Developer</h6>
                </div>
                <div className="matheus">
                    <img src={Matheus} alt="" />
                    <h5 className="nome">Matheus Alvino</h5>
                    <h6 className="job">Back-end Developer</h6>
                </div>
            </div>
        </section>
        </Desenvolvedores>

    )
}

export default Devs;