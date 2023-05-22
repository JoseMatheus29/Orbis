import { Container } from "./styles"
import Logo from "../../assets/logo-orbis.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Container>
            <div className="content">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h1>Orbis</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Acessar o Toolkit</Link>
                        </li>
                        <li>
                            <Link to="/">Me ajude a escolher</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>

    )
}

export default Header;