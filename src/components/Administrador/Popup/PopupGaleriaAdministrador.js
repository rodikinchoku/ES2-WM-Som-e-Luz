import React, { Component } from 'react';
import api from '../../../services/api';


import '../../../styles/components/Administrador/popup-galeria-administrador.css';
import { withRouter } from 'react-router-dom';

class PopupGaleriaAdministrador extends Component  {
    //Variáveis

    constructor(props) {
        super(props);
        this.state = {  
            titulo: '',
            descricao: '',
            file: '',
        };
        this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this);
        this.handleChangeFile = React.createRef();
    }

    //Funções

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.file)
        const formData = new FormData();
        formData.append('title', this.state.titulo);
        formData.append('description', this.state.descricao);
        formData.append('image', this.state.file); 
    
        await api.post("/events", formData, {
        });
      }

      handleChangeTitulo(event) {
        this.setState({titulo: event.target.value});
      }

      handleChangeDescricao(event) {
        this.setState({descricao: event.target.value});
      }
    
      handleChangeFile = (e) => {
        const file = e.target.files[0]; // accessing file
        this.setState({file: file}); // storing file
        console.log(this.state.file)
      }

    render(){

        return (
            <div id="component-galeria-popup-administrador">
                <div id="popup-galeria-inner-administrador">
                    <div className="header-popup-galeria-administrador">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="content-popup-galeria-administrador">
                        <form onSubmit={this.handleSubmit}>
                            <div className="item-content-popup-galeria-administrador">
                                <span>Título:</span>
                                <input type="text" className="input-content-popup-galeria-administrador" placeholder={this.props.title ? this.props.title : "Título do evento"} value={this.state.titulo} onChange={this.handleChangeTitulo} />
                            </div>
                            <div className="item-content-popup-galeria-administrador">
                                <span>Descrição:</span>
                                <input type="text" className="input-content-popup-galeria-administrador" placeholder={this.props.description ? this.props.description : "Descrição do evento"} value={this.state.descricao} onChange={this.handleChangeDescricao}/>
                            </div>
                            <div className="item-content-popup-galeria-administrador">
                                <input type="file"  className="input-image-content-popup-galeria-administrador" placeholder={this.props.image ? this.props.image : ""} ref={this.handleChangeFile} />
                            </div>
                        </form>
                    </div>
                    <div className="footer-popup-galeria-administrador">
                        <button type="submit" className="save-btn-popup-galeria-administrador" onClick={this.props.closePopup} >Salvar</button>
                        <button className="close-btn-popup-galeria-administrador" onClick={this.props.closePopup}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PopupGaleriaAdministrador);