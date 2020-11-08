import React, { Component } from 'react';
import Menu  from '../../Components/Menu';
import GerenciaServicosAdmin from '../../Components/GerenciaServicosAdmin';

class Servicos_Admin extends Component {
    render() {
        return (
          <div className="header">
          <Menu />
          <h1 className="agendaAdminTitle">Gerenciamento de serviços</h1>
          <GerenciaServicosAdmin />
          </div>
        );
    }
}

export default Servicos_Admin;