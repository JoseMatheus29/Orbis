import { ReactNode, useState } from "react";
import Header from "../Header";
import { Container, Content } from "./styles";
import SectionForm from "../../assets/section-form.svg";
import ModalForm from "../ModalForm";

interface IFormTheme {
    children: ReactNode;
}

const FormTheme = ({ children }: IFormTheme) => {
    document.title = 'Formulário - Orbis';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState('');
    function handleOpenModal(page: string) {
        setIsModalOpen(true);
        setPage(page);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <>
        <Header isOpenModal={handleOpenModal}/>
        <Container>
            <img src={SectionForm} id="section-form" />
            <ModalForm
            isOpen={ isModalOpen }
            onReaquestClose={ handleCloseModal }
            page={page}
            />
            <Content>
                { children }
            </Content>
        </Container>
        </>
    )
}

export default FormTheme;