import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Slider from '@mui/material/Slider';

import { Content, Filters, GridCards } from "./styles";
import { ITool } from "./types";
import SliderFilter from "../../components/SliderFilter";

const Toolkit = () => {
  // Estado que recebe todos os métodos disponíveis no toolkit por meio de uma requisição get
  const [allTools, setAllTools] = useState<ITool[]>([]);
  // Estado que rendezira os métodos na tela, ele pode sofrer alterações por meio dos filtros 
  const [result, setResult] = useState<ITool[]>([]);

  // Estados dos filtros, que podem ser alterados por meio dos inputs/buttons de filtros
  const [effort, setEffort] = useState<string>("0"); // Iniciar do 0
  const [time, setTime] = useState("0"); // Inicia do 0
  const [selectedStages, setSelectedStages] = useState<string[]>([]); // Inicia com todos selecionados

  // Estado do tipo boleano que verifica se foi aplicado algum filtro no toolkit
  //const [isFilter, setIsFilter] = useState(false);

  const handleButtonFilterStage = (stage: string) => {
    // Verifica se a etapa clicada está selecionada ou não
    if(selectedStages.includes(stage)) { // Se estiver, irá remover do array
      let stages = selectedStages.filter((filter) => filter !== stage);
      setSelectedStages(stages);
    } else { // Se não estiver, irá incluir no array
      setSelectedStages([...selectedStages, stage])
    }
  }


  useEffect(() => {
    api.get("/Tools/list").then((response) => {setAllTools(response.data); setResult(response.data)});
  }, []);

  const filter = (queryset: ITool[], key: string, value: string) => {
    const filteredTools = queryset.filter((tool) => {
      // @ts-ignore
      return tool[key] == value;
    });

    return filteredTools;
  }

  useEffect(() => {
    // QuerySet inicia com todos os métodos
    let qs = allTools

    // Filtrando por etapa
    if(selectedStages.length !== 0) {
      let filteredQs: ITool[] = [];
      // Percorrendo todas as etapas selecionadas
      for(let i = 0; i <= selectedStages.length - 1; i++) {
        let qs_temp = filter(qs, "Stage_idStage", selectedStages[i]);
        filteredQs = filteredQs.concat(qs_temp);
      }
      qs = filteredQs;
    }
    

    // Filtrando por esforço 
    if (effort && parseInt(effort) != 0) {
      qs = filter(qs, "effort", effort);
    }

    // Filtrando por tempo 
    if (time && parseInt(time) != 0) {
      qs = filter(qs, "time", time);
    }
    // Altera o estado result após filtragem
    setResult(qs)
  }, [selectedStages, effort, time]);

  const resetFilters = () => {
    // Função para resetar os filtros para o estado inicial
    setEffort("0");
    setTime("0");
    setSelectedStages([]);
  }

  const handleOnChangeSliderEffort = (event: any) => {
    setEffort(event.target.value);
  }
  const handleOnChangeSliderTime = (event: any) => {
    setTime(event.target.value);
  }

  
  return (
    <>
      <Header />
      <Content>
        <h4>Etapas</h4>
        <Filters>
        <Button 
          name="ANALISAR" 
          onClick={() => handleButtonFilterStage('3')}
          variant={selectedStages.includes('3') ? "" : "secondary"}
        />
        <Button 
          name="PROJETAR" 
          onClick={() => handleButtonFilterStage('4')}
          variant={selectedStages.includes('4') ? "" : "secondary"}
        />
        <Button 
          name="AVALIAR" 
          onClick={() => handleButtonFilterStage('5')}
          variant={selectedStages.includes('5') ? "" : "secondary"}
        />
        
        <label htmlFor="effort">Esforço</label>
        <SliderFilter
          ariaLabel={"Esforço"}
          onChange={handleOnChangeSliderEffort}
          value={effort}

        />
        

        <label htmlFor="time">Tempo</label>

        <SliderFilter
          ariaLabel={"Tempo"}
          onChange={handleOnChangeSliderTime}
          value={time}
        />

        </Filters>

        <Button name="LIMPAR FILTROS" onClick={resetFilters}/>
        <GridCards>
          {result.map((tool) => (
            <Link to={`${tool.id}`}>
              <Card
                name_pt={tool.name_pt}
                stage_id={tool.Stage_idStage}
                name_en={tool.name_en}
              />
            </Link>
          ))}
        </GridCards>
        {
          result.length ? null : "Nao possui ferramentas"
        }
      </Content>
    </>
  );
};

export default Toolkit;
