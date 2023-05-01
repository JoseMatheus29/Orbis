import  { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'

const RouteElement = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Home/> } path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteElement;