import React, { Component } from 'react';

import '../../../styles/components/Administrador/popup-adicionar-servicos-administrador.css';


class PopupAdicionarServicosAdministrador extends Component  {

    render(){

        return (
            <div id="component-popup-adicionar-serivos-administrador">
                <div id="popup-adicionar-servicos-inner-administrador">
                    <div className="header-popup-adicionar-servicos-inner-administrador">
                        <h1>Adicionar Serviço</h1>
                    </div>
                
                    <div className="content-popup-adicionar-servicos-inner-administrador">
                        <div className="item-content-adicionar-servicos-popup-inner-administrador">
                            <span>Nome:</span>
                            <input className="input-content-adicionar-servicos-popup-inner-administrador" type="text" placeholder="Nome do serviço"/>
                        </div>
                        <div className="item-content-adicionar-servicos-popup-inner-administrador">
                            <span>Valor:</span>
                            <input className="input-content-adicionar-servicos-popup-inner-administrador" type="text" placeholder="Valor do serviço"/>
                        </div>
                    </div>

                    <div className="footer-btn-popup-adicionar-servicos-inner-administrador">
                        <button className="save-btn-popup-adicionar-servicos-inner-administrador">Salvar</button>
                        <button className="close-btn-popup-adicionar-servicos-inner-administrador" onClick={this.props.closePopup}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupAdicionarServicosAdministrador;