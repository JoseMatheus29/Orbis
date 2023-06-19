import { useState } from "react";
//import { useStages } from "../../hooks/useStages";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";


import { Content, Arrow, Row, Column, Main, Animation } from "./styles";

import Orbis from "../../assets/orbis_home.svg";
import Seta from "../../assets/seta-home.svg";

import DCU from "./dcu";


const Home = () => {

    // Pegando as etapas do DCU na API
   // const { stages } = useStages();
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
        <Main>
            <Column>
                <h1>Orbis</h1>
                <h2>Toolkit de Design Centrado no Usuário </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit blanditiis dignissimos nisi velit autem sed, odio corrupti quasi dolorum ipsum placeat aliquid deserunt quas sequi sunt dolorem similique esse ut?</p>
                    
                <Row>
                    <Button
                    name="Me ajude a escolher!"
                    onClick={handleNavigateForm}
                    />
                    <Button
                    variant="secondary"
                    name="Acessar Toolkit"
                    onClick={handleNavigateToolkit}
                    />
                </Row>
            </Column>
            <img src={Orbis} alt="Orbis é uma bussóla com bigode e muito simpática" />     
        </Main>
        <Arrow>
                <img src={Seta} alt="Seta para baixo" />
        </Arrow>
        </Content>

        <DCU/>
        <Animation/>
        <Footer/>
        
         {/* {stages.map( (stage) => <Button name={ stage.name } key={stage.id} onClick={() => handleButton(stage.description) } /> ) }
         <p>{description}</p> */}
        </>
    )
}

export default Home;