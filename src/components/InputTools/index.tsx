import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ITool } from '../../pages/Toolkit/types';
import { Container } from './styles';

const InputTools = () => {
    
    const [allTools, setAllTools] = useState<ITool[]>([]);

    useEffect(() => {
        api.get("/Tools/list").then((response) => {setAllTools(response.data); });
    }, []);

    let optionsTools = [];

    for(let i = 0; i <= allTools.length - 1; i++ ) {
        optionsTools.push({label: allTools[i].name_pt});
    }

    return (
        <>
        <Container>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={optionsTools}
                
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params}  />}
            />
        </Container>
        </>
    )

}

export default InputTools;