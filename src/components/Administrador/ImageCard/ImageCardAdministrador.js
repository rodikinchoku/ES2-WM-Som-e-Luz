import React, { Component } from 'react';
import api from '../../../services/api';

import '../../../styles/components/Administrador/image-card-administrador.css';

import PopupGaleriaAdministrador from '../Popup/PopupGaleriaAdministrador';


class ImageCardAdministrador extends Component {
    
    //Variáveis 

    constructor() {
        super();
        this.state = {  
            showPopup: false,    
            images: '',
        };
    }

    //Funções 

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    handleDelete = async (itemId) => {
        await api.delete(`http://localhost:3333/events/${itemId}`);
    }


    render() {
        return (
            <div id="component-image-card-administrador">
                <div className="image-component-image-card-administrador">
                    <img src={this.props.image} alt="imagem"/>
                    <div className="overlay-btn-image-component-image-card-administrador">
                        <button className="btn-image-component-image-card-administrador" onClick={() => this.togglePopup.bind(this)}>
                            <span>Editar</span>
                        </button>
                        {this.state.showPopup ? 
                            <PopupGaleriaAdministrador name="Editar Evento" title={this.props.title} description={this.props.description} image={this.props.image} closePopup={this.togglePopup.bind(this)} /> : null 
                        }
                        <button className="btn-image-component-image-card-administrador" onClick={() => this.handleDelete(this.props.id)}>
                            <span>Remover</span>
                        </button>
                    </div>
                    <hr />
                </div>
                <div className="content-component-image-card-administrador">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default ImageCardAdministrador;