import { Container, Content, List } from "./styles"
import Logo from "../../assets/logo-orbis.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';


const Header = () => {

    const location = useLocation();

    const [ isHome, setIsHome ] = useState(false);

    useEffect(() => {
        if(location.pathname === '/') {
            setIsHome(true);
        } else {
            console.log('testtee');
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
                   {isHome ? <input type="text" name="" id="" /> : null}
                    <List>
                        <li>
                            <Link to="/toolkit">Acessar o Toolkit</Link>
                        </li>
                        <li>
                            <Link to="/form">Me ajude a escolher</Link>
                        </li>
                    </List>
                </nav>
            </Content>
        </Container>

    )
}

export default Header;