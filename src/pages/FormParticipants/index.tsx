import { FormAction, useForm } from "../../hooks/useForm";
import FormTheme from "../../components/FormTheme";

import {
  FormControl,
  RadioGroup,
} from "@mui/material";

import Participants1 from "../../assets/form_assests/participants1.svg";
import Participants2 from "../../assets/form_assests/participants2.svg";
import Participants3 from "../../assets/form_assests/participants3.svg";
import Arrow from '../../assets/form_assests/arrow-back.svg';
import Button from "../../components/Button";
import OptionLabel from "../../components/OptionLabel";
import { Link, useNavigate } from "react-router-dom";
import { TimeLineForm } from "../../components/TimeLineForm";
import DontKnow from "../../assets/form_assests/dontKnow.svg";
import { useEffect } from "react";

const FormParticipants = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(!state.Stage_idStage) {
      navigate('/stage');
    }
  }, []);

  const handleSetParticipants = (e: any) => {
    dispatch({
      type: FormAction.setParticipants,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if(state.participants !== '') {
      navigate('/type_of_data');
    }
  }

  return (
    <FormTheme>
        <TimeLineForm
          currentStep={4}
        />
      <h1>
      Quantas pessoas estão <span>envolvidas</span> <br/> nessa etapa?
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
            checked={ state.participants == "1" }
            value="1"
            labelName="Estou sozinho"
            onClick={handleSetParticipants}
            img={Participants1}
          />
          <OptionLabel
            checked={ state.participants == "2" }
            value="2"
            labelName="2-4 pessoas"
            onClick={handleSetParticipants}
            img={Participants2}
          />
          <OptionLabel
            checked={ state.participants == "3" }
            value="3"
            labelName="4 ou +"
            onClick={handleSetParticipants}
            img={Participants3}
          />
           <OptionLabel
            checked={ state.participants == "0" }
            value="0"
            labelName="Não sei"
            onClick={handleSetParticipants}
            img={DontKnow}
          />
        </RadioGroup>
      </FormControl>
      <div id="nav-form">
        <Link to='/effort'><img src={Arrow}/> Voltar</Link>
        <Button
          name="Próximo"
          onClick={handleNextStep}
          variant={ state.effort ? "primary" : "disabled"}
          />
      </div>
    </FormTheme>
  );
};

export default FormParticipants;
