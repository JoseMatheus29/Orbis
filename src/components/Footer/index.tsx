import { Rodape } from "./styles"
import LogoB from "../../assets/logo_branca.svg"

export const Footer = () => {
    
    return(
        <Rodape>
            <img src={LogoB} className="imagem" alt="Ícone de uma bussola"/>
            <p className="subtitulo">©2023 - Célula Multimídia</p>
        </Rodape>
    )
}