import { Container } from "./styles";
import Jamyle from '../../assets/team/jamyle.svg';

const CardDev = () => {

    return (
        <Container>
            <img src={ Jamyle } alt="" />
            <h2>Jamyle Layla</h2>
            <p>Front-end Developer</p>
        </Container>
    )
}


export default CardDev;
