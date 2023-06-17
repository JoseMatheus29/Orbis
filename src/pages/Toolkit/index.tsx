import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Content, GridCards } from "./styles";
import { api } from "../../services/api";
import { ITool } from "./types";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Toolkit = () => {
  const filters = ["ANALISAR", "PROJETAR", "AVALIAR"]

  const [allTools, setAllTools] = useState<ITool[]>([]);
  const [result, setResult] = useState<ITool[]>([]);

  const [stage, setStage] = useState('');
  const [effort, setEffort] = useState("0");
  const [time, setTime] = useState("0");

  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    api.get("/Tools/list").then((response) => {setAllTools(response.data); setResult(response.data)});
  }, []);

  useEffect(() => {
    let qs = allTools

    if (stage) {
      qs = filter(qs, "Stage_idStage", stage)
    }

    if (effort && parseInt(effort) != 0) {
      qs = filter(qs, "effort", effort)
    }

    if (time && parseInt(time) != 0) {
      qs = filter(qs, "time", time)
    }

    setResult(qs)
  }, [stage, effort, time]);

  const resetFilters = () => {
    setEffort("0")
    setStage("")
    setTime("0")
  }

  const filter = (queryset: ITool[], key: string, value: string) => {
    const filteredTools = queryset.filter((tool) => {
      // @ts-ignore
      return tool[key] === value;
    });

    return filteredTools
  }
  
  return (
    <>
      <Header />

      <Content>
        <Button 
          name="ANALISAR" 
          onClick={() => setStage('3')}
          variant="secondary"
        />
        <Button 
          name="PROJETAR" 
          onClick={() => setStage('4')}
          variant="secondary"
        />
        <Button 
          name="AVALIAR" 
          onClick={() => setStage('5')}
          variant="secondary"
        />

        <label htmlFor="effort">Esforço</label>

        <input
          type="range"
          value={effort}
          onChange={(e) => setEffort(e.target.value)}
          name="effort"
          min={0}
          max={3}
        />

        <label htmlFor="time">Time</label>

        <input
          type="range"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          name="time"
          min={0}
          max={3}
        />
        <Button name="LIMPAR FILTROS" onClick={resetFilters}/>
{/* 
        {isFilter ? (
          <span
            onClick={() => {
              setIsFilter(false);
            }}
          >
            Limpar filtro
          </span>
        ) : null} */}
        <GridCards>
          {result.map((tool) => (
            <Link to={`${tool.id}`}>
              <Card
                name_pt={tool.name_pt}
                stage_id={tool.Stage_idStage}
                name_en={tool.name_en}
              />
              esforço: {tool.effort}
              tempo: {tool.time}
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
