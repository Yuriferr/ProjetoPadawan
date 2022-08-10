import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components';

import Home from './pages/Home';
import Api from './pages/ProjetoApi';

import Erro from './pages/Erro/idnex';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/api' element= {<Api/>}/>

                <Route path='*' element= {<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;