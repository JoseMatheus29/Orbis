// Context -> Armazenar os dados
// Reducer -> Executa ações específicas
// Provider -> Ambiente para ter acesso aos dados
// Hook -> Simplificar o processo para ter acesso as informações

import { ReactNode, createContext, useContext, useReducer } from "react";
import { api } from "../services/api";

interface ITool {
  currentStep: 0;
  effort: string;
  time: string;
  Stage_idStage: "" | "3" | "4" | "5";
  participants?: string;
  typeOfData?: string;
}

type Action = {
  type: FormAction;
  payload: any;
};

type ContextType = {
  state: ITool;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: ITool = {
  currentStep: 0,
  Stage_idStage: "",
  time: "",
  effort: "",
  participants: "",
  typeOfData: ""

};

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormAction {
  setCurrentStep,
  setStage,
  setTime,
  setEffort,
  setParticipants,
  setTypeOfData,
  resetState
}

const formReducer = (state: ITool, action: Action) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormAction.setStage:
      return { ...state, Stage_idStage: action.payload };
    case FormAction.setEffort:
      return { ...state, effort: action.payload };
    case FormAction.setTime:
      return { ...state, time: action.payload };
    case FormAction.setParticipants:
      return { ...state, participants: action.payload };
    case FormAction.setTypeOfData:
      return { ...state, typeOfData: action.payload };
    case FormAction.resetState:
      return initialData;
    default:
      return state;
  }
};

// Provider

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Contenxt Hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
