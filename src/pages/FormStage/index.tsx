import Header from "../../components/Header";
import { Content, Container } from "./style";

import AnalysesOrbis from "../../assets/analyses_orbis.svg"
import DesignOrbis from "../../assets/design_orbis.svg";
import EvaluateOrbis from "../../assets/evaluate_orbis.svg";
import SectionForm from "../../assets/section-form.svg";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FormStage = () => {
  return (
    <>
      <Header />
      <Container>
        <img src={SectionForm} id="section-form" />
        <Content>
          <h1>
            Selecione a <span>etapa</span> que você irá realizar:
          </h1>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
               <FormControlLabel
                value="3"
                control={<Radio />}
                className="label-form"
                label={
                <>
                  <img src={AnalysesOrbis} alt="" id="analyses-orbis" />
                  <h2>Analisar</h2>
                </>
                }
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                className="label-form"
                label={
                <>
                  <img src={DesignOrbis} alt="" id="analyses-orbis" />
                  <h2>Analisar</h2>
                </>
                }
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                className="label-form"
                label={
                <>
                  <img src={EvaluateOrbis} alt="" id="analyses-orbis" />
                  <h2>Analisar</h2>
                </>
                }
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Content>
      </Container>
    </>
  );
};

export default FormStage;
