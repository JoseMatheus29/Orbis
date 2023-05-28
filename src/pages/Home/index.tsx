import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useStages } from "../../hooks/useStages";
import { Inicio, Content } from "./styles"
import Orbis from "../../assets/orbis-home.svg"
import Seta from "../../assets/seta-home.svg"
import O_que from "../../assets/o_que.svg"
import Tici_val from "../../assets/tici_val.svg"
import Seta_b from "../../assets/seta_b_tici_val.svg"
import Seta_c from "../../assets/seta_c_tici_val.svg"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { stages } = useStages();
    const [description, setDecription] = useState('');
    const navigate = useNavigate ();
    const handleButton = (des: string) => {
        console.log(des)
        setDecription(des);
    }
    const handleNavigateForm = () => {
        navigate('/form');
    }
    const handleNavigateToolkit = () => {
        navigate('/toolkit');
    }

    return(
        <>
        <Header/>
        <Inicio >
            <div className="main_home">
                <div className="section_home">
                    <h1 className="titulo_orbis">Orbis</h1>
                    <h2 className="subtitulo">Toolkit de Design Centrado no Usuário </h2>
                    <p className="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit blanditiis dignissimos nisi velit autem sed, odio corrupti quasi dolorum ipsum placeat aliquid deserunt quas sequi sunt dolorem similique esse ut?</p>
                    <Button name="Me ajude a escolher!" onClick={handleNavigateForm}/>
                    <Button name="Acessar Toolkit" onClick={handleNavigateToolkit}/>
                </div>
                <div className="img_orbis_home">
                    <img src={Orbis} alt="" />
                </div>
            </div>
            <div className="seta_home">
                <img src={Seta} alt="" />
            </div>
            <section className="o_que">
                <div className="o_que_titulo"><h2>O que é Design Centrado no Usuário?</h2></div>
                <div className="container_o_que">
                    <div className="o_que_img"> <img src={O_que} alt="" /> </div>
                    <div className="o_que_titulo1"><p>Donald Norman, pesquisador de ciência cognitiva e um dos maiores influenciadores sobre design, defende que um bom design requer uma comunicação clara entre pessoas e as máquinas e sistemas que elas precisam utilizar no cotidiano.</p></div>
                    <div className="o_que_titulo2"><p>Com base nessa ideia, ele criou o termo Design Centrado no Usuário (DCU), uma abordagem de design em que a construção de soluções de design vão de encontro às necessidades dos usuários.</p></div>
                </div>
            </section>
            <section className="animacao">
                <div className="Analise"><h1>Análise</h1></div>
                <div className="Sintese"><h1>Síntese</h1></div>
                <div className="Avaliacao"><h1>Avaliação</h1></div>
            </section>
            
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
            </section>

            <section className="Desenvolvedores">
                
            </section>
        </Inicio>
        <Content/>
        
         {stages.map( (stage) => <Button name={ stage.name } key={stage.id} onClick={() => handleButton(stage.description) } /> ) }
         <p>{description}</p>
        </>
    )
}

export default Home;