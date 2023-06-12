import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Content } from "./styles";

interface ITool {
    name_pt: string;
    name_en: string;
}


const Tool = () => {

    const params = useParams();

    const [ tool, setTool ] = useState<ITool>({ name_pt: '', name_en: ''});

    useEffect(() => {
        api.get(`/Tools/list/${params.idTool}`)
            .then(response => setTool(response.data));
    }, [])

    console.log(tool.name_pt);

    return (
        <>
        <Header/>
        <Content>
            <h1>{tool.name_pt}</h1>
            <h2>{tool.name_en}</h2>
        </Content>
        </>
        
    )
}

export default Tool;