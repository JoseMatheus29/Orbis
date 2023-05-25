import { Container, Content, List } from "./styles"
import Logo from "../../assets/logo-orbis.svg"
import { Link } from "react-router-dom";

const Header = () => {
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