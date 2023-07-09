import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";
import NameOrbis from '../../assets/name_orbis.svg';
import DCU from "../../assets/dcu.svg";

import Valeska from "../../assets/team/valeska.svg";
import Ticianne from "../../assets/team/ticianne.svg";

import { Content,  Row, Column, Main, Section, Center, Stages, AboutContainer, IdealizerContainer, Idealizer, DevsContainer, GridDevs } from "./styles";

import Orbis from "../../assets/orbis_home.svg";
import SectionHome from "../../assets/section-home.svg";
import SectionAbout from "../../assets/section_about_orbis.svg";
import Graphics from "../../assets/graphics.svg";
import CardStage from "../../components/CardStage";
import CardDev from "../../components/CardDev";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";

import Jamyle from '../../assets/team/jamyle.svg';
import Alairton from '../../assets/team/alairton.svg';
import Isabelle from '../../assets/team/isabelle.svg';
import Mariana from '../../assets/team/mariana.svg';
import Matheus from '../../assets/team/matheus.svg';
import Bia from '../../assets/team/bia.svg';


const Home = () => {
    document.title = 'Orbis'
    // Navegação da páginas
    const navigate = useNavigate ();

    const handleNavigateForm = () => {
        navigate('/form');
    }
    const handleNavigateToolkit = () => {
        navigate('/toolkit');
    }

    return(
        <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <Header/>
        <Content>
        <Main>
            <Column>
                <img src={ NameOrbis } alt="Orbis" id="name_orbis"/>
                <h2>Toolkit de Design Centrado <br/> no Usuário </h2>
                <p>O Orbis 2.0 é um toolkit digital interativo que tem como objetivo guiá-lo por sua jornada pelo Design Centrado no Usuário (DCU).</p>
                    
                <Row>
                    <Button
                    name="Recomendação"
                    onClick={handleNavigateForm}
                    />
                    <Button
                    name="Acessar Toolkit"
                    onClick={handleNavigateToolkit}
                    variant="secondary"
                    />
                </Row>
            </Column>
            <img src={Orbis} alt="Orbis é uma bussóla com bigode e muito simpática" />     
        </Main>
        </Content>

        <Section>
            <img src={SectionHome} id="section-home" />
            <Content>
                <Center>
                    <Column>
                    <h1>
                        Design Centrado <br/> no Usuário 
                    </h1>
                    <p>
                        Donald Norman, pesquisador de ciência cognitiva e um dos maiores influenciadores sobre design, defende que um bom design requer uma comunicação clara entre pessoas e as máquinas e sistemas que elas precisam utilizar no cotidiano.
                    </p>

                    <p>
                        Com base nessa ideia, ele criou o termo Design Centrado no Usuário (DCU), uma abordagem de design em que a construção de soluções de design vão de encontro às necessidades dos usuários.
                    </p>
                    </Column>

                    <img src={DCU} id="DCU"/>

                </Center>
            </Content>
            <img src={ Graphics } id="graphics" />
            <Content>
                <Stages>
                    <h1>Etapas do DCU</h1>
                    <CardStage
                        name="Analisar"
                        template="analyses"
                        subtitle="Identificar quem são os principais usuários de um produto e a natureza do problema."
                        description="Nesta etapa o designer deve se aproximar dos usuários e observar suas atividades, na tentativa de entender interesses, motivações e necessidades. A compreensão adequada do problema é proveniente do conhecimento aprofundado sobre aquilo que as pessoas desejam realizar e os impedimentos existentes na experiência atual. "
                    />
                    <CardStage
                        name="Projetar"
                        template="design"
                        subtitle="Nessa etapa são desenvolvidas propostas de soluções que contemplem os requisitos estabelecidos para o sistema."
                        description="A criação da proposta utiliza o estudo dos usuários como embasamento durante seu desenvolvimento. É o momento de exercício da criatividade, e os principais fundamentos da etapa são a geração de muitas ideias, o respeito às ideias que surgem, evitando criticismo no início do processo, e o questionamento constante sobre a adequação das soluções."
                    />
                    <CardStage
                        name="Avaliar"
                        template="evaluate"
                        subtitle="Verificar se a solução proposta está alinhada com os requisitos estabelecidos anteriormente e se satisfaz às necessidades dos usuários em seus diferentes contextos de uso."
                        description="É durante as avaliações que a aceitação do design e a qualidade de uso são verificados. Podem ser feitas avaliações por especialistas ou com usuários. No último caso, é necessário identificar pessoas que fazem parte do público-alvo da solução e reuni-las para testar uma ideia. A avaliação é seguida por ciclos de iteração, em que acontecem o refinamento das ideias e a melhoria contínua da solução."
                    />
                </Stages>
            </Content>
            <img src={SectionAbout} id="section-about"/>
            <Content>
                <AboutContainer>
                    <Column>
                        <h3>Sobre o</h3>
                        <img src={ NameOrbis } alt="Orbis" id="name_orbis_about"/>
                    </Column>

                    <p>O Orbis 2.0 é uma adaptação do Orbis, um toolkit de Design Centrado no Usuário de 15 cartas físicas. A versão digital interativa foi desenvolvida com objetivo de promover o maior acesso a uma ferramenta educativa de fácil utilização e compreensão aos interessados em aprender sobre o DCU e em como aplicar suas técnicas no processo de design de um projeto.</p>
                </AboutContainer>
                <Center>
                    <Column>
                    <h1>Idealizadoras</h1>
                    <IdealizerContainer>
                        <Idealizer>
                            <img src={ Valeska } alt="" />
                            <h4>Valeska Eduardo</h4>
                            <p>
                            Profissional com 6+ anos em TI, com formação acadêmica em Sistemas e Mídias Digitais, e ênfase em Interação Humano Computador e Desenvolvimento de Sistemas. Atualmente reside no Canadá para um intercâmbio focado em imersão em inglês e francês.
                            </p>
                        </Idealizer>
                        <Idealizer>
                            <img src={ Ticianne } alt="" />
                            <h4>Ticianne Darin</h4>
                            <p>
                            Professora Adjunta da Universidade Federal do Ceará (UFC), onde ministra disciplinas e realiza pesquisas nas áreas de Interação Humano-Computador e Design e Jogos Digitais.
                            </p>
                        </Idealizer>
                    </IdealizerContainer>
                    </Column>
                </Center>
                <DevsContainer>
                    <h1>
                        Desenvolvedores
                    </h1>
                    <GridDevs>
                        <CardDev
                            name="Alairton Junior"
                            description="Project Leader"
                            img={Alairton}
                        />
                        <CardDev
                            name="Jamyle Layla"
                            description="Front-end Developer"
                            img={Jamyle}
                        />
                        <CardDev
                            name="Isabelle Reinbold"
                            description="Front-end Developer"
                            img={Isabelle}
                        />
                        <CardDev
                            name="Mariana Rangel"
                            description="Designer | Ilustradora"
                            img={Mariana}
                        />
                        <CardDev
                            name="Beatriz Carvalho"
                            description="Designer | Ilustradora"
                            img={Bia}
                        />
                        <CardDev
                            name="Matheus Alvino"
                            description="FullStack Developer"
                            img={Matheus}
                        />
                        
                    </GridDevs>     

                </DevsContainer>
                
            </Content>
        </Section>
        <Footer/>
        </motion.div>
    )
}

export default Home;