import { Container, Content, List } from "./styles"
import Logo from "../../assets/logo-orbis.svg"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InputTools from '../InputTools';

const Header = () => {

    const location = useLocation();

    const [ isHome, setIsHome ] = useState(false);

    useEffect(() => {
        if(location.pathname === '/') {
            setIsHome(true);
        }
    }, [ location.pathname ])

    return(
        <Container>
            <Content>
                <div className="logo">
                    <Link to="/">                      
                        <img src={Logo} alt="Ícone de uma bussóla" />
                        <h1>Orbis</h1>
                    </Link>
                </div>
                <nav>
                  
                    <List>
                        {isHome ? 
                            <InputTools/>
                            :
                            null}
                        <Link to="/toolkit">
                            <li className="hover-underline-animation">
                                Acessar o Toolkit
                            </li>
                        </Link>
                        <Link to="/form">
                            <li className="hover-underline-animation">
                            Recomendação
                            </li>
                        </Link>
                    </List>
                </nav>
            </Content>
        </Container>

    )
}

export default Header;