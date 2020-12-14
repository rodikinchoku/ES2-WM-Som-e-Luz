import React, { Component } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import api from '../../services/api';

import '../../styles/pages/administrador/galeria-fotos-administrador.css';

import MenuAdministrador from '../../components/Administrador/Menu/MenuAdministrador';
import HeaderAdministrador from '../../components/Administrador/Header/HeaderAdministrador';
import PopupGaleriaAdministrador from '../../components/Administrador/Popup/PopupGaleriaAdministrador';
import ImageCardAdministrador from '../../components/Administrador/ImageCard/ImageCardAdministrador';

import fest1 from '../../images/festa_1_bd.jpg';
import fest2 from '../../images/festa_2_bd.jpg';
import fest3 from '../../images/festa_3_bd.jpg';

class GaleriaFotosAdministrador extends Component{

    //Variáveis 

    constructor() {
        super();
        this.state = {  
            showPopup: false,    
            images: [],
        };
    }

    //Funções 

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const response = await api.get("/events");
        console.log(response.data)
        this.setState({ images: response.data });
    }

    render() {
        return (
            <div id="page-galeria-de-fotos-administrador">
                <div className="menu-galeria-de-fotos-administrador">
                    <MenuAdministrador/>
                </div>
    
                <div className="header-galeria-de-fotos-administrador">
                    <HeaderAdministrador name="header-galeria-de-fotos-administrador"/>
                </div>

                <div className="adicionar-fotos-galeria-administrador">
                    <button className="btn-adicionar-imagens-galeria-administrador" onClick={this.togglePopup.bind(this)}>
                        <span>Adicionar evento</span>
                        <FaCalendarPlus />
                    </button>
                    {this.state.showPopup ? 
                        <PopupGaleriaAdministrador name="Adicionar Evento" closePopup={this.togglePopup.bind(this)} /> : null 
                    }
                </div>

                <div className="content-galeria-de-fotos-administrador">
                    <ImageCardAdministrador image={fest1} title="Casamento Sorocaba" description="Som e iluminação com estrutura iglu em Sorocaba." />
                    <ImageCardAdministrador image={fest2} title="Iluminação em Festa" description="Iluminação com moving heads e lasers." />
                    <ImageCardAdministrador image={fest3} title="Casamento - Lusa" description="Festa de casamento no salão lusa." />
                </div>

            </div>
        );
    }
}

export default GaleriaFotosAdministrador;

