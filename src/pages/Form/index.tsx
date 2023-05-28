import Button from "../../components/Button";
import Header from "../../components/Header"
import { Content } from "./style";
import Orbis_Form from "../../assets/orbis-form.svg"

const Form = () => {
    return (
        <>
            <Header/>
            <Content>
                <div className="main_form">
                    <div className="img_orbis_form">
                        <img src={Orbis_Form} alt="Imagem Orbis pensando"/>
                    </div>
                    <div className="texto_form">
                        <h1 className="titulo_orbis">Me ajude a escolher!</h1>
                        <h3 className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula vulputate lorem, in ornare risus finibus et. In sapien sapien, aliquet ac sagittis a, elementum sit amet urna. Mauris quis convallis enim. </p>
                        <Button name="Iniciar" /> 
                    </div>
                </div>
            </Content>
        </>
    )
}
export default Form;