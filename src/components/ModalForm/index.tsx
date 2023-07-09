import Modal from "react-modal";

import closeImg from "../../assets/icon/close.svg";
import alertModal from "../../assets/icon/alertModal.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { FormAction, useForm } from "../../hooks/useForm";

interface IModal {
    isOpen: boolean;
    onReaquestClose: () => void;
    page: string;
  }

const ModalForm = ({ isOpen, onReaquestClose, page} : IModal) => {

    const navigate = useNavigate();
    const { dispatch } = useForm();

    const handleCloseRecommendation = () => {
        navigate(`${page}`);
        dispatch({
            type: FormAction.setCurrentStep,
            payload: 0
        })
        dispatch({ type: FormAction.resetState, payload: null });
        
    }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onReaquestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onReaquestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>

        <img src={alertModal}/>
        <p>Você ainda não finalizou o formulário, <br/> tem certeza que deseja cancelar?</p>
        <div>
            <Button name="Voltar" variant="" onClick={onReaquestClose}/>
            <Button name="Sim" variant="" onClick={handleCloseRecommendation}/>
        </div>

      </Modal>
    </>
  );
};

export default ModalForm;
