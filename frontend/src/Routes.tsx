import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Cadastro from './pages/Cadastro';
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
                    <Cadastro />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}