import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useStages } from "../../hooks/useStages";
import { Inicio, Content } from "./styles"
import Orbis from "../../assets/orbis-home.svg"
import Seta from "../../assets/seta-home.svg"
import { useNavigate } from "react-router-dom";
import Devs from "../../components/Devs";
import { Footer } from "../../components/Footer";

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
                    <Button variant="secondary" name="Acessar Toolkit" onClick={handleNavigateToolkit}/>
                </div>
                <div className="img_orbis_home">
                    <img src={Orbis} alt="" />
                </div>
            </div>
            <div className="seta_home">
                <img src={Seta} alt="" />
            </div>
            
        </Inicio>
        <Content/>
        <Devs/>
        <Footer/>
        
         {stages.map( (stage) => <Button name={ stage.name } key={stage.id} onClick={() => handleButton(stage.description) } /> ) }
         <p>{description}</p>
        </>
    )
}

export default Home;