import React, { Component } from 'react';
import { FaTools } from 'react-icons/fa';

import '../../styles/pages/administrador/servicos-administrador.css';

import MenuAdministrador from '../../components/Administrador/Menu/MenuAdministrador';
import HeaderAdministrador from '../../components/Administrador/Header/HeaderAdministrador';
import PopupAdicionarServicosAdministrador from '../../components/Administrador/Popup/PopupAdicionarServicosAdministrador';
import PopupEditarServicosAdministrador from '../../components/Administrador/Popup/PopupEditarServicosAdministrador';



class ServicosAdministrador extends Component{
    //Variáveis 

    constructor() {
        super();
        this.state = {  
            showPopupAdd: false,
            showPopupEdit: false,    
        };
    }

    //Funções 

    togglePopupAdd() {
        this.setState({ showPopupAdd: !this.state.showPopupAdd });
    }

    togglePopupEdit() {
        this.setState({ showPopupEdit: !this.state.showPopupEdit });
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
                    <button className="btn-adicionar-servicos-administrador" onClick={this.togglePopupAdd.bind(this)}>
                        <span>Adicionar serviços</span>
                        <FaTools />
                    </button>
                    {this.state.showPopupAdd ? 
                        <PopupAdicionarServicosAdministrador closePopup={this.togglePopupAdd.bind(this)} /> : null 
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
                                    <button className="edit-btn-content-servicos-administrador" onClick={this.togglePopupEdit.bind(this)}>
                                        <span>Editar</span>
                                        {this.state.showPopupEdit ? 
                                            <PopupEditarServicosAdministrador closePopup={this.togglePopupEdit.bind(this)} /> : null 
                                        }
                                    </button>
                                   
                                    <button className="delete-btn-content-servicos-administrador">
                                        <span>Remover</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Luz</td>
                                <td>200</td>
                                <td>
                                    <button className="edit-btn-content-servicos-administrador" onClick={this.togglePopupEdit.bind(this)}>
                                        <span>Editar</span>
                                        {this.state.showPopupEdit ? 
                                            <PopupEditarServicosAdministrador closePopup={this.togglePopupEdit.bind(this)} /> : null 
                                        }
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