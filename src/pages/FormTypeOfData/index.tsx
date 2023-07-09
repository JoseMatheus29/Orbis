import { FormAction, useForm } from "../../hooks/useForm";
import FormTheme from "../../components/FormTheme";

import {
  FormControl,
  RadioGroup,
} from "@mui/material";

import Quantitative from "../../assets/form_assests/quantitative.svg";
import Qualitative from "../../assets/form_assests/qualitative.svg";
import QualiQuanti from "../../assets/form_assests/qualiquanti.svg";
import Arrow from '../../assets/form_assests/arrow-back.svg';
import Button from "../../components/Button";
import OptionLabel from "../../components/OptionLabel";
import { Link, useNavigate } from "react-router-dom";
import { TimeLineForm } from "../../components/TimeLineForm";
import DontKnow from "../../assets/form_assests/dontKnow.svg";
import { useEffect } from "react";

const FormTypeOfData = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(!state.Stage_idStage) {
      navigate('/stage');
    }
  }, []);


  const handleSetTypeOfData = (e: any) => {
    dispatch({
      type: FormAction.setTypeOfData,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if(state.typeOfData !== '') {
      navigate('/recommendation');
    }
    // dispatch({ type: FormAction.resetState, payload: null });
    dispatch({
        type: FormAction.setCurrentStep,
        payload: 0
    })
  }

  return (
    <FormTheme>
        <TimeLineForm
          currentStep={5}
        />
      <h1>
      Indique sua preferência em relação aos <br/>  <span>tipos de dados</span> a serem coletados:
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
            checked={ state.typeOfData == "1" }
            value="1"
            labelName="Quantitativo"
            onClick={handleSetTypeOfData}
            img={Quantitative}
          />
          <OptionLabel
            checked={ state.typeOfData == "2" }
            value="2"
            labelName="Qualitativo"
            onClick={handleSetTypeOfData}
            img={Qualitative}
          />
          <OptionLabel
            checked={ state.typeOfData == "3" }
            value="3"
            labelName="Ambos"
            onClick={handleSetTypeOfData}
            img={QualiQuanti}
          />
           <OptionLabel
            checked={ state.typeOfData == "0" }
            value="0"
            labelName="Não sei"
            onClick={handleSetTypeOfData}
            img={DontKnow}
          />
        </RadioGroup>
      </FormControl>
      <div id="nav-form">
        <Link to='/participants'><img src={Arrow}/> Voltar</Link>
        <Button
          name="Finalizar"
          onClick={handleNextStep}
          variant={ state.typeOfData ? "primary" : "disabled"}
          />
      </div>
    </FormTheme>
  );
};

export default FormTypeOfData;
