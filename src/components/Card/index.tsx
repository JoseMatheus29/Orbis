import { Container } from "./styles";
import { stageName } from "./utils";

interface ICard {
    name_pt: string;
    name_en: string;
    stage_id: string;
    variant: string;
    icon: string;
}

const Card = ({ name_pt, name_en, stage_id, variant, icon }: ICard) => {

    const stage = stageName(stage_id);
    const pathIcon = import(`../../assets/icons_tools/${icon}`);
  
    return (
        <Container variant={ variant }>
            <img src={ pathIcon } alt="Ícone" />
            <h2>{ name_pt }</h2>
            <h3>{ name_en }</h3>

            <div>{ stage }</div>
        </Container>
    )
    
}

export default Card;