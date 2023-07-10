import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ITool } from '../../pages/Toolkit/types';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

const InputTools = () => {
    
    const [allTools, setAllTools] = useState<ITool[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/Tools/list").then((response) => {setAllTools(response.data); });
    }, []);

    let optionsTools = [];

    for(let i = 0; i <= allTools.length - 1; i++ ) {
        optionsTools.push({label: allTools[i].name_pt, id: allTools[i].id});
    }

    return (
        <>
        <Container>
            <Autocomplete
                freeSolo
                id="combo-box-demo"
                className="custom-autocomplete"
                options={optionsTools}
                onChange={
                    // @ts-ignore
                    (event, value) => navigate(`/toolkit/${value.id}`)

                }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Pesquise um método...."
                /> 
            
            }
            />
        </Container>
        </>
    )

}

export default InputTools;