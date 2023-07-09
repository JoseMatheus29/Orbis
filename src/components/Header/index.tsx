import { Container, Content, List } from "./styles"
import Logo from "../../assets/logo-orbis.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InputTools from '../InputTools';
import { useForm } from "../../hooks/useForm";

interface IHeader {
    isOpenModal?: (arg: string) => void;
}

const Header = ({ isOpenModal }: IHeader ) => {

    const location = useLocation();
    const { state } = useForm();
    const navigate = useNavigate();

    const [ isHome, setIsHome ] = useState(false);

    useEffect(() => {
        if(location.pathname === '/') {
            setIsHome(true);
        }
    }, [ location.pathname ])

    const handleNavToolkit = () => {
        // @ts-ignore
        if(state.currentStep !== 1) {
            navigate('/toolkit');
        } else {
        // @ts-ignore
           isOpenModal('/toolkit');
        }
        
    }

    const handleNavForm = () => {
        // @ts-ignore
        if(state.currentStep !== 1) { 
            navigate('/form');
        } else {
            // @ts-ignore
               isOpenModal('/form');
        }
        
    }

    const handleNavHome = () => {
        // @ts-ignore
        if(state.currentStep !== 1) {  
            navigate('/');
        } else {
            // @ts-ignore
               isOpenModal('/');
        }
        
    }

    return(
        <Container>
            <Content>
                <div className="logo">
                    <a onClick={handleNavHome}>                      
                        <img src={Logo} alt="Ícone de uma bussóla" />
                        <h1>Orbis</h1>
                    </a>
                </div>
                <nav>
                  
                    <List>
                        {isHome ? 
                            <InputTools/>
                            :
                            null}
                        <a onClick={handleNavToolkit}>
                            <li className="hover-underline-animation">
                                Acessar o Toolkit
                            </li>
                        </a>
                        <a onClick={handleNavForm}>
                            <li className="hover-underline-animation">
                            Recomendação
                            </li>
                        </a>
                    </List>
                </nav>
            </Content>
        </Container>

    )
}

export default Header;