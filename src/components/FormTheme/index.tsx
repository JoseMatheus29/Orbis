import { ReactNode } from "react";
import Header from "../Header";
import { Container, Content } from "./styles";
import SectionForm from "../../assets/section-form.svg";

interface IFormTheme {
    children: ReactNode;
}

const FormTheme = ({ children }: IFormTheme) => {
    return (
        <>
        <Header />
        <Container>
        <img src={SectionForm} id="section-form" />
            <Content>
                { children }
            </Content>
        </Container>
        </>
    )
}

export default FormTheme;