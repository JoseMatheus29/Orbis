// Importação dos componentes da biblioteca React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Toolkit from "./pages/Toolkit";
import Form from "./pages/Form";
import FormStage from "./pages/FormStage";
import FormTime from "./pages/FormTime";
import Tool from "./pages/Tool";
import FormEffort from "./pages/FormEffort";

const RouteElement = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Toolkit />} path="/toolkit" />
        <Route element={<Tool />} path="/toolkit/:idTool" />

        <Route element={<Form />} path="/form" />
        <Route element={<FormStage />} path="/stage" />
        <Route element={<FormTime />} path="/time" />
        <Route element={<FormEffort/>} path="/effort" />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteElement;
