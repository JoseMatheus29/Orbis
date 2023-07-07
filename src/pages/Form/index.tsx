import Button from "../../components/Button";
import Header from "../../components/Header"
import { Content } from "./style";
import Orbis_Form from "../../assets/orbis-form.svg"

import { useNavigate } from "react-router-dom";


const Form = () => {

    const navigate = useNavigate ();
    const handleNavigateFormStage = () => {
        navigate('/stage');
    }

    return (
        <>
            <Header/>
            <Content>
                <div className="main_form">
                    <div className="img_orbis_form">
                        <img src={Orbis_Form} alt="Imagem Orbis pensando"/>
                    </div>
                    <div className="texto_form">
                        <h1 className="titulo_orbis">Quer uma ajudinha?</h1>
                        <h3 className="subtitulo">O Orbis pode te guiar na escolha do melhor método para você!</h3>
                        <p className="descricao">Para receber uma recomendação de técnicas de Design Centrado no Usuário, basta responder algumas perguntas de acordo com seus objetivos e necessidades. </p>
                        <Button name="Iniciar" onClick={handleNavigateFormStage}/> 
                    </div>
                </div>
            </Content>
        </>
    )
}
export default Form;