import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import ResetFilters from "../../components/ResetFilters";

import { ContainerSlider, Content, Filters, GridCards,ButtonGroup } from "./styles";
import { ITool } from "./types";
import SliderFilter from "../../components/SliderFilter";
import Skeleton from "@mui/material/Skeleton";

const Toolkit = () => {
  document.title = 'Toolkit - Orbis';
  const [allTools, setAllTools] = useState<ITool[]>([]);
  const [result, setResult] = useState<ITool[]>([]);

  // Estados dos filtros, que podem ser alterados por meio dos inputs/buttons de filtros
  const [effort, setEffort] = useState<string>("0"); // Iniciar do 0
  const [time, setTime] = useState("0"); // Inicia do 0
  const [selectedStages, setSelectedStages] = useState<string[]>([]); // Inicia com todos selecionados

  const [ isLoading, setIsLoading ] = useState(true);
  const [ isFilter, setIsFilter ] = useState(false);


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
    setIsLoading(true);

    api.get("/Tools/list").then((response) => { 
      setAllTools(response.data);
      setResult(response.data)
      if(response.status == 200) {
        setIsLoading(false);
      }
    })

  }, []);

  const filter = (queryset: ITool[], key: string, value: string) => {
    setIsFilter(true);
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
        filteredQs = qs_temp.concat(filteredQs);
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

  const handleResetFilters = () => {
    // Função para resetar os filtros para o estado inicial
    setEffort("0");
    setTime("0");
    setSelectedStages([]);
    setIsFilter(false);
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
        <h1>Toolkit</h1>
        
        <Filters>
        
        <ContainerSlider>
          <h4>Etapas</h4>
          <ButtonGroup>
              <Button 
                name="ANALISAR" 
                onClick={() => handleButtonFilterStage('3')}
                variant={selectedStages.includes('3') ? "analyzes" : ""}
              />
              <Button 
                name="PROJETAR" 
                onClick={() => handleButtonFilterStage('4')}
                variant={selectedStages.includes('4') ? "design" : ""}
              />
              <Button 
                name="AVALIAR" 
                onClick={() => handleButtonFilterStage('5')}
                variant={selectedStages.includes('5') ? "evaluate" : ""}
              />
          </ButtonGroup>
        </ContainerSlider>
        
        <ContainerSlider>
        <label htmlFor="effort">Esforço</label>
        <SliderFilter
          ariaLabel={"Esforço"}
          onChange={handleOnChangeSliderEffort}
          setValue={setEffort}
          value={effort}
        />
        </ContainerSlider>

        <ContainerSlider>
          <label htmlFor="time">Tempo</label>

        <SliderFilter
          ariaLabel={"Tempo"}
          onChange={handleOnChangeSliderTime}
          setValue={setTime}
          value={time}
        />
        </ContainerSlider>
        </Filters>

        <ResetFilters onClick={handleResetFilters} className={!isFilter ? "opacity" : "" }/>
        
        <GridCards>
          {result.map((tool) => (
            <Link to={`${tool.id}`}>
              <Card
                name_pt={tool.name_pt}
                stage_id={tool.Stage_idStage}
                name_en={tool.name_en}
                variant={tool.templateName}
                icon={tool.icon}
              />
            </Link>
          ))}
          {
            !isLoading ? null : <><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/></>
          }
          {
            !isLoading && result.length <= 0 ? <h1>Nenhuma ferramenta encontrada!</h1> : null
          }
        </GridCards>
       
      </Content>
      </>
  );
};

export default Toolkit;

const SkeletonCard = () => {
  return (
    <Skeleton  variant="rounded" width={240} height={340} />
  )
}
