import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Content, Steps } from "./styles";

interface ITool {
    name_pt: string;
    name_en: string;
}

interface ISteps {
    id: number;
    title: string;
    description: string;
    alert: string;
}


const Tool = () => {

    const params = useParams();

    const [ tool, setTool ] = useState<ITool>({ name_pt: '', name_en: ''});
    const [ steps, setSteps ] = useState<ISteps[]>([]);

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
        <Content>
            <h1>{tool.name_pt}</h1>
            <h2>{tool.name_en}</h2>

            <Steps>
            { steps.map((step) => 
            <>
                
               <h2> {step.title}</h2>
               <p>{step.description }</p>
            </>
            )}
            </Steps>
        </Content>
        </>
    )
}

export default Tool;