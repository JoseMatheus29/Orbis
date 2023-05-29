import { Container } from "./styles";
import Icon from "../../assets/icon.svg";
import Button from "../Button";
import { stageName } from "./utils";

interface ICard {
    name_pt: string;
    name_en: string;
    stage_id: number;
}

const Card = ({ name_pt, name_en, stage_id }: ICard) => {

    const stage = stageName(stage_id);

    return (
        <Container>
            <img src={ Icon } alt="Ícone" />
            <h2>{ name_pt }</h2>
            <h3>{ name_en }</h3>

            <Button name={ stage }/>
        </Container>
    )
}

export default Card;