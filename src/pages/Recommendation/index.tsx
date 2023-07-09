import Header from "../../components/Header";
import { Content, Finish, RecommendationContainer, Row } from "./styles";

import SectionForm from "../../assets/section-form.svg";
import OrbisRecommendation from "../../assets/orbis-recommendation.svg";
import FinishText from "../../assets/finish.svg";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useForm, FormAction } from "../../hooks/useForm";
import Card from "../../components/Card";
import { IRecommendation } from "./types";

const Recommendation = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [renderRecommendation, setRenderRecommendation] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (state.currentStep !== 0) {
      navigate("/stage");
      console.log("entrou");
    }
  }, []);

  const [result, setResult] = useState<IRecommendation>({});

  const handleTryAgain = () => {
    navigate("/stage");
  };

  const reqRecommendation = async () => {
    try {
      const response = await api.post("/recommendation", {
        Stage_idStage: state.Stage_idStage,
        time: state.time,
        participants: state.participants,
        effort: state.effort,
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setRenderRecommendation(true);
      dispatch({ type: FormAction.resetState, payload: null });
    }
  };

  return (
    <>
      <Header />
      <img src={SectionForm} id="section-recommendation" />
      <Content>
        

        {renderRecommendation ? (
          <RecommendationContainer>
            <h1>Recomendação</h1>
            <p>
              Baseado em suas respostas o Orbis encontrou alguns métodos que
              podem ser de seu interesse! <br /> Clique no método para saber
              mais sobre ele.
            </p>
            <Row>
            {result.recommendedIdeal !==
            "Nenhuma recomendação ideal encontrada." ? (
              <Link to={`../toolkit/${result.recommendedIdeal.id}`}>
                <Card
                  name_pt={result.recommendedIdeal.name_pt}
                  stage_id={result.recommendedIdeal.Stage_idStage}
                  name_en={result.recommendedIdeal.name_en}
                  variant={result.recommendedIdeal.templateName}
                  icon={result.recommendedIdeal.icon}
                />
              </Link>
            ) : null}
            {result.recommendedSimilar !==
            "Nenhuma recomendação parecida encontrada." ? (
              <Link to={`../toolkit/${result.recommendedSimilar.id}`}>
                <Card
                  name_pt={result.recommendedSimilar.name_pt}
                  stage_id={result.recommendedSimilar.Stage_idStage}
                  name_en={result.recommendedSimilar.name_en}
                  variant={result.recommendedSimilar.templateName}
                  icon={result.recommendedSimilar.icon}
                />
              </Link>
            ) : null}
            {result.recommendedNotWorking !==
            "Nenhuma recomendação que não funciona encontrada." ? (
              <Link to={`../toolkit/${result.recommendedSimilar.id}`}>
                <Card
                  name_pt={result.recommendedNotWorking.name_pt}
                  stage_id={result.recommendedNotWorking.Stage_idStage}
                  name_en={result.recommendedNotWorking.name_en}
                  variant={result.recommendedNotWorking.templateName}
                  icon={result.recommendedNotWorking.icon}
                />
              </Link>
              
            ) : null}
            </Row>
            <Row>
              <Button
                name="Tentar Novamente"
                variant=""
                onClick={handleTryAgain}
              />
              {/* <Button
                name="Baixar Recomendação"
                variant=""
                onClick={undefined}
              /> */}
            </Row>
          </RecommendationContainer>
        ) : 
        <>
        <Finish>
          <img src={OrbisRecommendation} id="orbis-recommendation" />
          <img src={FinishText} id="finish-text" />
        </Finish>
        <Button name="Visualizar Resultados" onClick={reqRecommendation} />
        </>
        }
      </Content>
    </>
  );
};

export default Recommendation;
