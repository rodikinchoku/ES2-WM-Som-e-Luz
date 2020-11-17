import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';

import 'react-nice-dates/build/style.css';
import '../../styles/pages/administrador/agenda-administrador.css';

import MenuAdministrador from '../../components/Administrador/Menu/MenuAdministrador';
import HeaderAdministrador from '../../components/Administrador/Header/HeaderAdministrador';
import DatePickerAdministrador from '../../components/Administrador/DatePicker/DatePickerAdministrador';
import PopupEventosAdministrador from '../../components/Administrador/Popup/PopupEventosAdministrador';


class AgendaAdministrador extends Component{

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
            <div id="page-agenda-administrador">
                <div className="menu-agenda-administrador">
                    <MenuAdministrador />
                </div>
    
                <div className="header-agenda-administrador">
                    <HeaderAdministrador name="header-agenda-administrador"/>
                </div>
    
                <div className="selecionar-data-agenda-administrador">
                    <p>Selecione uma data: </p>
                    <DatePickerAdministrador />
                </div>
                    
                <div className="cards-eventos-agenda-administrador">
                    <div className="card-eventos-agenda-administrador">
                        <div className="header-card-eventos-administrador">
                            <h1>NOME</h1>
                            <hr />
                        </div>

                        <div className="edit-card-eventos-administrador">
                            <button className="btn-edit-card-eventos-administrador" onClick={this.togglePopup.bind(this)}>
                                <span>Editar</span>
                                <FaEdit />
                            </button>
                            {this.state.showPopup ? 
                                <PopupEventosAdministrador closePopup={this.togglePopup.bind(this)} /> : null 
                            }
                        </div>

                        <div className="content-card-eventos-administrador">
                            <strong>Horário</strong>
                            <span>8:35</span>
                            <strong>Local</strong>
                            <span>Avenida 123, número 45, Bairro 6 Sao Paulo</span>
                        </div>
                    </div>

                    <div className="card-eventos-agenda-administrador">
                        <div className="header-card-eventos-administrador">
                            <h1>NOME</h1>
                            <hr />
                        </div>

                        <div className="edit-card-eventos-administrador">
                            <button className="btn-edit-card-eventos-administrador" onClick={this.togglePopup.bind(this)}>
                                <span>Editar</span>
                                <FaEdit />
                            </button>
                            {this.state.showPopup ? 
                                <PopupEventosAdministrador closePopup={this.togglePopup.bind(this)} /> : null 
                            }
                        </div>

                        <div className="content-card-eventos-administrador">
                            <strong>Horário</strong>
                            <span>6:54</span>
                            <strong>Local</strong>
                            <span>Rua 789, Sorocaba</span>
                        </div>

                    </div>
                </div>
            </div>)
        ;
    }
}

export default AgendaAdministrador;

