import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login_Admin from './pages/Login_Admin';
import Agenda_Admin from './pages/Agenda_Admin';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/Admin" component={Login_Admin} />
            <Route path="/Agenda_Admin" component={Agenda_Admin} />
        </Switch>
    </BrowserRouter>
);

export default Routes;