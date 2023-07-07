import { FormControl, RadioGroup } from "@mui/material";
import FormTheme from "../../components/FormTheme";
import OptionLabel from "../../components/OptionLabel";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { FormAction, useForm } from "../../hooks/useForm";

import Effort1 from "../../assets/form_assests/effort1.svg";
import Arrow from "../../assets/form_assests/arrow-back.svg";

const FormEffort = () => {
  const { state, dispatch } = useForm();

  const handleSetEffort = (e: any) => {
    dispatch({
      type: FormAction.setEffort,
      payload: e.target.value
    })
  };

  return (
    <FormTheme>
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
            checked={state.effort == "1"}
            value="1"
            labelName="Baixo"
            onClick={handleSetEffort}
            img={Effort1}
            id="analyses-orbis"
          />
          <OptionLabel
            checked={state.effort == "2"}
            value="2"
            labelName="Médio"
            onClick={handleSetEffort}
            img={Effort1}
            id="analyses-orbis"
          />
          <OptionLabel
            checked={state.effort == "3"}
            value="3"
            labelName="Alto"
            onClick={handleSetEffort}
            img={Effort1}
            id="analyses-orbis"
          />
        </RadioGroup>
      </FormControl>
      <div id="nav-form">
        <Link to="/time">
          <img src={Arrow} /> Voltar
        </Link>
        <Button name="Próximo" onClick={undefined} />
      </div>
    </FormTheme>
  );
};

export default FormEffort;
