import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Content, GridCards } from "./styles";
import { api } from "../../services/api";
import { ITool } from "./types";
import Button from "../../components/Button";

const Toolkit = () => {

    const [ tools, setTools ] = useState<ITool[]>([]);
    const [ isFilter, setIsFilter ] = useState(false);
    
    useEffect(() => {
        api.get('/tools')
            .then(response => setTools(response.data));
    }, [])

    

    return ( 
        <>
            <Header/>
            <Content>

                { isFilter ? <span onClick={ () => { setIsFilter(false);} }>Limpar filtro</span>  : null }
                <GridCards>
                   { tools.map( (tool) => <Card name_pt={ tool.name } stage_id={tool.stage_id} name_en={ tool.name }/> )}
                    
                </GridCards>
            </Content>
        </>
    )
}

export default Toolkit;