import { Rodape } from "./styles"
import LogoB from "../../assets/logo_branca.svg"

export const Footer = () => {
    
    return(
        <Rodape >
            <div className="rodape">
                <div className="rodape_1">
                    <img src={LogoB} className="imagem" alt="Ícone de uma bussola"/>
                    <h1 className="orbis">Orbis</h1>
                </div>
                <div className="rodape_2">
                <p className="subtitulo">©2023 - Célula Multimídia</p>
                </div>
            </div>
        </Rodape>
    )
}