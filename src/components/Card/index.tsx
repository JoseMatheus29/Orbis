import { Container } from "./styles";
import Icon from "../../assets/icon.svg";
import Button from "../Button";

const Card = () => {
    return (
        <Container>
            <img src={ Icon } alt="Ícone" />
            <h2>Entrevista</h2>
            <h3>Interview</h3>

            <Button name="ANALISAR"/>
        </Container>
    )
}

export default Card;