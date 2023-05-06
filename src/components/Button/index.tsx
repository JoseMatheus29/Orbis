import { ButtonStyle } from "./styles";
import { IButton } from "./types";


const Button = ({ name, onClick }: IButton) => {
    return(
        <ButtonStyle 
            onClick={onClick}
        >
            { name }
        </ButtonStyle>
    )
}

export default Button;