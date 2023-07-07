import { FormAction, useForm } from "../../hooks/useForm";
import FormTheme from "../../components/FormTheme";

import {
  FormControl,
  RadioGroup,
} from "@mui/material";

import Time1 from "../../assets/form_assests/time1.svg";
import Time2 from "../../assets/form_assests/time2.svg";
import Time3 from "../../assets/form_assests/time3.svg";
import Arrow from '../../assets/form_assests/arrow-back.svg';
import Button from "../../components/Button";
import OptionLabel from "../../components/OptionLabel";
import { Link, useNavigate } from "react-router-dom";
import { Timeline } from "@mui/lab";
import TimeLineForm from "../../components/TimeLineForm";

const FormTime = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();


  const handleSetTime = (e: any) => {
    dispatch({
      type: FormAction.setTime,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if(state.time !== '') {
      navigate('/effort');
    }
  }

  return (
    <FormTheme>
      <Timeline className="timeline-form">
        <TimeLineForm/>
      </Timeline>
      <h1>
        Quanto <span>tempo</span> você pretende <br /> destinar a este trabalho?
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
            checked={ state.time == "1" }
            value="1"
            labelName="1 dia"
            onClick={handleSetTime}
            img={Time1}
          />
          <OptionLabel
            checked={ state.time == "2" }
            value="2"
            labelName="+-3 dias"
            onClick={handleSetTime}
            img={Time2}
          />
          <OptionLabel
            checked={ state.time == "3" }
            value="3"
            labelName="+1semana"
            onClick={handleSetTime}
            img={Time3}
          />
        </RadioGroup>
      </FormControl>
      <div id="nav-form">
        <Link to='/stage'><img src={Arrow}/> Voltar</Link>
        <Button name="Próximo" onClick={handleNextStep} />
      </div>
    </FormTheme>
  );
};

export default FormTime;
