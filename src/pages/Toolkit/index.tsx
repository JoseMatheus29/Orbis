import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Content, GridCards } from "./styles";
import { api } from "../../services/api";

interface ITool {
    id: number;
    name: string;
    type: string;
    stage_id: number;
}

const Toolkit = () => {

    const [ tools, setTools ] = useState<ITool[]>([]);

    useEffect(() => {
        api.get('/tools')
            .then(response => setTools(response.data));
    }, [])

    console.log(tools)

    return ( 
        <>
            <Header/>
            <Content>
                <GridCards>
                   { tools.map( (tool) => <Card name_pt={ tool.name } stage_id={tool.stage_id} name_en={ tool.name }/> )}
                    
                </GridCards>
            </Content>
        </>
    )
}

export default Toolkit;