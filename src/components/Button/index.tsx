import { ButtonStyle } from "./styles";
import { IButton } from "./types";


const Button = ({ name, onClick, variant = "primary"}: IButton) => {
    return(
        <ButtonStyle 
            onClick={ onClick }
            variant={ variant }
        >
            { name }
        </ButtonStyle>
    )
}

export default Button;