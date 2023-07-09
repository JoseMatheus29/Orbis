import AnalysesOrbis from "../../assets/analyses_orbis.svg"
import DesignOrbis from "../../assets/design_orbis.svg";
import EvaluateOrbis from "../../assets/evaluate_orbis.svg";
import Arrow from '../../assets/form_assests/arrow-back.svg';
import Button from "../../components/Button";
import FormTheme from "../../components/FormTheme";

import { Link, useNavigate } from "react-router-dom";

import {
  FormControl,
  RadioGroup,
} from "@mui/material";
import { useForm, FormAction } from "../../hooks/useForm";
import OptionLabel from "../../components/OptionLabel";
import { TimeLineForm } from "../../components/TimeLineForm";


const FormStage = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if(state.Stage_idStage !== '') {
      navigate('/time');
    }
  }

  const handleSetStage = (e: any) => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1
    })
    dispatch({
      type: FormAction.setStage,
      payload: e.target.value
    })
  }

  return (
    <>
      <FormTheme>
            {state.Stage_idStage ? <TimeLineForm
              currentStep={1}
            /> :
            null }
          <h1>
            Selecione a <span>etapa</span> que você irá realizar:
          </h1>

          <FormControl>
            <RadioGroup
              row
              className="radio-group"
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <OptionLabel
                checked={ state.Stage_idStage == "3" }
                value="3"
                labelName="Analisar"
                onClick={handleSetStage}
                img={AnalysesOrbis}
                id="analyses-orbis"
              />
              <OptionLabel
                checked={ state.Stage_idStage == "4" }
                value="4"
                labelName="Projetar"
                onClick={handleSetStage}
                img={DesignOrbis}
                id="analyses-orbis"
              />
              <OptionLabel
                checked={ state.Stage_idStage == "5" }
                value="5"
                labelName="Avaliar"
                onClick={handleSetStage}
                img={EvaluateOrbis}
                id="analyses-orbis"
              />
            </RadioGroup>
          </FormControl>
          <div id="nav-form">
            <Link to='/form'><img src={Arrow}/> Voltar</Link>
            <Button
            variant={ state.Stage_idStage ? "primary" : "disabled"}
            name="Próximo"
            onClick={handleNextStep}
          />
          </div>

        </FormTheme>
    </>
  );
};

export default FormStage;
