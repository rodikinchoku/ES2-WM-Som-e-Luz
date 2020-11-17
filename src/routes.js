import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import LoginAdministrador from './pages/Administrador/LoginAdministrador';
import AgendaAdministrador from './pages/Administrador/AgendaAdministrador';
import GaleriaFotosAdministrador from './pages/Administrador/GaleriaFotosAdministrador';
import ServicosAdministrador from './pages/Administrador/ServicosAdministrador';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/admin", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes =() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={LoginAdministrador} />
                <PrivateRoute path="/agenda-admin" component={AgendaAdministrador} />
                <PrivateRoute path="/galeria-de-fotos-admin" component={GaleriaFotosAdministrador} />
                <PrivateRoute path="/servicos-admin" component={ServicosAdministrador} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;