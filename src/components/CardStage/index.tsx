import { Column, Container } from "./styles";

import AnalysesOrbis from "../../assets/analyses_orbis.svg"
import DesignOrbis from "../../assets/design_orbis.svg";
import EvaluateOrbis from "../../assets/evaluate_orbis.svg";

import { Variants, motion  } from "framer-motion";
import { ICardStage } from "./types";

const firstCard: Variants = {
    offscreen: {
      y: 20,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  


const CardStage = ({ name, description, template, subtitle } : ICardStage) => {
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={firstCard}
        >
        <Container template={template}>
            {
                template == "analyzes" ? <img src={ AnalysesOrbis } id="img_orbis"/> : null
            }
            {
                template == "design" ? <img src={ DesignOrbis } id="img_orbis"/> : null
            }
             {
                template == "evaluate" ? <img src={EvaluateOrbis } id="img_orbis"/> : null
            }
            <Column>
            <h1>{name}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            </Column>
            
        </Container>
        </motion.div>
    )
}

export default CardStage;