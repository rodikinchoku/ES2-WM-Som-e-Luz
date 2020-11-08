import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login_Admin from './pages/Login_Admin';
import Agenda_Admin from './pages/Agenda_Admin';
import Galeria_Admin from './pages/Galeria_Admin';
import Servicos_Admin from './pages/Servicos_Admin';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/Admin" component={Login_Admin} />
            <Route path="/Agenda_Admin" component={Agenda_Admin} />
            <Route path="/Galeria_de_Fotos_Admin" component={Galeria_Admin} />
            <Route path="/Servicos_Admin" component={Servicos_Admin} />
        </Switch>
    </BrowserRouter>
);

export default Routes;