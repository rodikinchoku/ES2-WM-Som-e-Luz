import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import LoginAdministrador from './pages/Administrador/LoginAdministrador';
import AgendaAdministrador from './pages/Administrador/AgendaAdministrador';
import GaleriaFotosAdministrador from './pages/Administrador/GaleriaFotosAdministrador';

import Home from './pages/Home/Home';
import Sobre from './pages/Home/Sobre';
import Eventos from './pages/Home/Eventos';
import Servicos from './pages/Home/Servicos';
import Contato from './pages/Home/Contato';

import ScrollToTop from './components/Home/Scroll/ScrollToTop';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
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
            <ScrollToTop />
            <Switch>
                <Route path="/admin" component={LoginAdministrador} />
                <PrivateRouteAdmin path="/agenda-admin" component={AgendaAdministrador} />
                <PrivateRouteAdmin path="/galeria-de-fotos-admin" component={GaleriaFotosAdministrador} />
                <Route exact path="/" component={Home} />
                <Route path="/sobre-nos" component={Sobre} />
                <Route path="/eventos-realizados" component={Eventos} />
                <Route path="/servicos-oferecidos" component={Servicos} />
                <Route path="/contato" component={Contato} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;