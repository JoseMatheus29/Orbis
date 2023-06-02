import { useState } from "react";
import { useStages } from "../../hooks/useStages";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Devs from "../../components/Devs";
import { Footer } from "../../components/Footer";
import { Etapas } from "../../components/Etapas";
import DCU from "../../components/O_que_e";

import { Section , Content, Arrow } from "./styles"

import Orbis from "../../assets/orbis-home.svg"
import Seta from "../../assets/seta-home.svg"

const Home = () => {

    // Pegando as etapas do DCU na API
    const { stages } = useStages();
    const [description, setDecription] = useState('');
   

    // Navegação da páginas
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
        <Content>
        <Section>
                <div>
                    <h1>Orbis</h1>
                    <h2>Toolkit de Design Centrado no Usuário </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit blanditiis dignissimos nisi velit autem sed, odio corrupti quasi dolorum ipsum placeat aliquid deserunt quas sequi sunt dolorem similique esse ut?</p>
                    <Button
                    name="Me ajude a escolher!"
                    onClick={handleNavigateForm}
                    />
                    <Button
                        variant="secondary"
                        name="Acessar Toolkit"
                        onClick={handleNavigateToolkit}
                    />
                    
                </div>
                <img src={Orbis} alt="Orbis é uma bussóla com bigode e muito simpática" />     
        </Section>
        <Arrow>
                <img src={Seta} alt="Seta para baixo" />
        </Arrow>
        </Content>
            
       
        <DCU/>
        <Etapas/>
        <Devs/>
        <Footer/>
        
         {stages.map( (stage) => <Button name={ stage.name } key={stage.id} onClick={() => handleButton(stage.description) } /> ) }
         <p>{description}</p>
        </>
    )
}

export default Home;