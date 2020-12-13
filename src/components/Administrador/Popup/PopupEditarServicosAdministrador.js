import React, { Component } from 'react';

import '../../../styles/components/Administrador/popup-editar-servicos-administrador.css';


class PopupEditarServicosAdministrador extends Component  {

    render(){

        return (
            <div id="component-popup-editar-serivos-administrador">
                <div id="popup-editar-servicos-inner-administrador">
                    <div className="header-popup-editar-servicos-inner-administrador">
                        <h1>Editar Serviço</h1>
                    </div>
                
                    <div className="content-popup-editar-servicos-inner-administrador">
                        <div className="item-content-editar-servicos-popup-inner-administrador">
                            <span>Nome:</span>
                            <input className="input-content-editar-servicos-popup-inner-administrador" type="text" placeholder="Novo nome"/>
                        </div>
                        <div className="item-content-editar-servicos-popup-inner-administrador">
                            <span>Valor:</span>
                            <input className="input-content-editar-servicos-popup-inner-administrador" type="text" placeholder="Novo valor" />
                        </div>
                    </div>

                    <div className="footer-btn-popup-editar-servicos-inner-administrador">
                        <button className="save-btn-popup-editar-servicos-inner-administrador">Salvar</button>
                        <button className="close-btn-popup-editar-servicos-inner-administrador" onClick={this.props.closePopup}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupEditarServicosAdministrador;