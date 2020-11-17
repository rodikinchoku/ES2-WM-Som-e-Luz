import React, { Component } from 'react';

import '../../../styles/components/Administrador/popup-editar-eventos-administrador.css';


class PopupEventosAdministrador extends Component  {

    render(){

        return (
            <div id='component-popup-eventos-administrador'>
                <div id='popup-eventos-inner-administrador'>
                    <div className="header-popup-eventos-inner-administrador">
                        <h1>Editar informações</h1>
                    </div>
                
                    <div className="content-popup-eventos-inner-administrador">
                        <div className="item-content-eventos-popup-inner-administrador">
                            <span>Nome:</span>
                            <input className="input-content-eventos-popup-inner-administrador" type="text" placeholder="Nome evento"/>
                        </div>
                        <div className="item-content-eventos-popup-inner-administrador">
                            <span>Horário:</span>
                            <input className="input-content-eventos-popup-inner-administrador" type="text" placeholder="Horário do evento"/>
                        </div>
                        <div className="item-content-eventos-popup-inner-administrador">
                            <span>Local:</span>
                            <input className="input-content-eventos-popup-inner-administrador" type="text" placeholder="Local do evento"/>
                        </div>
                    </div>

                    <div className="footer-btn-popup-eventos-inner-administrador">
                        <button className="save-btn-popup-eventos-inner-administrador">Salvar</button>
                        <button className="close-btn-popup-eventos-inner-administrador" onClick={this.props.closePopup}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupEventosAdministrador;