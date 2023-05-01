import { ButtonStyle } from "./styles";
import { IButton } from "./types";


const Button = ({ name }: IButton) => {
    return(
        <ButtonStyle>{ name }</ButtonStyle>
    )
}

export default Button;