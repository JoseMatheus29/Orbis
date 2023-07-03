import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Content, Steps, ItensContent, HeaderContent } from "./styles";
import TimeLineOrbis from "../../components/TimeLine";
import CardTools from "../../components/CardTools"
import { stageName } from "./utils";
import Button from "../../components/Button";


interface ITool {
    name_pt: string;
    name_en: string;
    time: number ;
    effort:number; 
    Stage_idStage: string;
    templateName: string;
    icon: string; 
}

interface ISteps {
    id: number;
    title: string;
    description: string;
    alert: string;
}


const Tool = () => {
    const params = useParams();

    const [ tool, setTool ] = useState<ITool>({ name_pt: '', name_en: '', time:0, effort:0, Stage_idStage:'', templateName:'', icon:''});
    const [ steps, setSteps ] = useState<ISteps[]>([]);
    const stage = stageName(tool.Stage_idStage);

    useEffect(() => {
        api.get(`/Tools/list/${params.idTool}`)
            .then(response => setTool(response.data));
    }, [])

    useEffect(() => {
        api.get(`/Step/list/${params.idTool}`)
            .then(response => setSteps(response.data));
    }, [])

    console.log(steps);

    return (
        <>
        <Header/>
        <Content
            variant={tool.templateName}
        >
            <h3 id="StageOfTool">{stage}</h3>
            <HeaderContent>
                <img src={ `https://alairtonjunior.com/imgs_icon/` + tool.icon } alt="Ícone" />
                <div>
                    <h1>{tool.name_pt}</h1>
                    <h2>{tool.name_en}</h2>
                </div>
                <div id="Button">
                <Button
                    name= "Materiais extras"
                    onClick = {undefined} 
                    variant={tool.templateName}
                    />
                </div>
            </HeaderContent>
            <ItensContent
                variant={tool.templateName}
            >
                <div>
                    <CardTools
                    valueTime= {tool.time}
                    valueEffort= {tool.effort}
                    variant={tool.templateName}
                />   
                </div>
                 <div>
                    <h3 id="WhyUseTitle">Quando usar</h3>""
                    <p id="WhyUseText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat quam non leo viverra, vel varius velit faucibus. Aenean congue magna a eros commodo, in pellentesque felis vestibulum. Fusce ullamcorper massa sed risus lobortis, at volutpat dolor lobortis. Praesent quis efficitur ipsum. Sed non sapien sed enim eleifend tincidunt sed at mauris. Nullam eu est lectus. Vestibulum et blandit orci. Nullam vitae nisi id nunc pellentesque fermentum eget a odio.</p>
                    <h3 id="WhyUseTitle">Passo a passo</h3>
                    <Steps>
                    { steps.map((step) => <>
                        <TimeLineOrbis 
                        title = {step.title} 
                        description = {step.description }
                        number = {steps.indexOf(step)+1}
                        variant = {tool.Stage_idStage}
                        />
                        
                    
                    </>
                    )}
                    </Steps>
                 </div>
            </ItensContent>
        </Content>
        </>
    )
}

export default Tool;