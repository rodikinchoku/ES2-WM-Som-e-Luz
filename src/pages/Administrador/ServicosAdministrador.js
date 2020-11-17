import React, { Component } from 'react';
import { FaTools } from 'react-icons/fa';

import '../../styles/pages/administrador/servicos-administrador.css';

import MenuAdministrador from '../../components/Administrador/Menu/MenuAdministrador';
import HeaderAdministrador from '../../components/Administrador/Header/HeaderAdministrador';
import PopupServicosAdministrador from '../../components/Administrador/Popup/PopupServicosAdministrador';


class ServicosAdministrador extends Component{
    //Variáveis 

    constructor() {
        super();
        this.state = {  
            showPopup: false,    
        };
    }

    //Funções 

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }


    render() {
        return (
            
            <div id="page-servicos-administrador">
                <div className="menu-servicos-administrador">
                    <MenuAdministrador/>
                </div>
    
                <div className="header-servicos-administrador">
                    <HeaderAdministrador name="header-servicos-administrador"/>
                </div> 

                <div className="adicionar-servicos-administrador">
                    <button className="btn-adicionar-servicos-administrador" onClick={this.togglePopup.bind(this)}>
                        <span>Adicionar serviços</span>
                        <FaTools />
                    </button>
                    {this.state.showPopup ? 
                        <PopupServicosAdministrador name="Adicionar Evento" closePopup={this.togglePopup.bind(this)} /> : null 
                    }
                </div>
                
                <div className="content-servicos-administrador">
                    <table>
                        <thead>
                            <tr>
                            <th><span>Serviços</span></th>
                                <th><span>Preço</span></th>
                                <th><span>Opções</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Som</td>
                                <td>500</td>
                                <td>
                                    <button className="edit-btn-content-servicos-administrador" onClick={this.togglePopup.bind(this)}>
                                        <span>Editar</span>
                                        {this.state.showPopup ? 
                                            <PopupServicosAdministrador name="Editar Evento" closePopup={this.togglePopup.bind(this)} /> : null 
                                        }
                                    </button>
                                   
                                    <button className="delete-btn-content-servicos-administrador">
                                        <span>Remover</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Luz</td>
                                <td>300</td>
                                <td>
                                    <button className="edit-btn-content-servicos-administrador" onClick={this.togglePopup.bind(this)}>
                                        <span>Editar</span>
                                    </button>
                                    
                                    <button className="delete-btn-content-servicos-administrador">
                                        <span>Remover</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ServicosAdministrador;