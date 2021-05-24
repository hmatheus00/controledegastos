import { Route, BrowserRouter, Switch } from 'react-router-dom'
import CadastroCompra from './pages/CadastroCompra';
import CadastroCartao from './pages/CadastroCartao';
import Extrato from './pages/Extrato';
import Home from './pages/Home';


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/extrato" exact>
                    <Extrato />
                </Route>
                <Route path="/cadastrar" exact>
                    <CadastroCompra />
                </Route>
                <Route path="/cadastrarCartao" exact>
                    <CadastroCartao />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}