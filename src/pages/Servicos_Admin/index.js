import React, { Component } from 'react';
import Menu  from '../../Components/Menu';
import GerenciaServicosAdmin from '../../Components/GerenciaServicosAdmin';
import './style.css';

class Servicos_Admin extends Component {
    render() {
        return (
          <div>
          <Menu />
          <h1 className="gerenciaServicosTitle">Gerenciamento de serviços</h1>
          <GerenciaServicosAdmin />
          </div>
        );
    }
}

export default Servicos_Admin;