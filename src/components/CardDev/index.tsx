import { Container } from "./styles";

interface ICardDev {
    img: string;
    name: string;
    description: string;
}

const CardDev = ({img, name, description}: ICardDev) => {

    return (
        <Container>
            <img src={ img } />
            <h2>{name}</h2>
            <p>{description}</p>
        </Container>
    )
}


export default CardDev;
