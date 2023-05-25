// Importação dos componentes da biblioteca React-Router-Dom
import  { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Toolkit from './pages/Toolkit';
import Form from './pages/Form';

const RouteElement = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Home/> } path="/"/>
                <Route element={ <Toolkit/> } path='/toolkit'/>
                <Route element={ <Form/> } path='/form'/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteElement;