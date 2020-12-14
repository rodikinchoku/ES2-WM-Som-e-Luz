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
    }

    //Funções

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(this.state)
        const titulo = this.state.titulo;
        const descricao = this.state.descricao;
        const file = this.state.file;
        formData.append('title', titulo);
        formData.append('description', descricao);
        formData.append('image', file); 

        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
    
        await api.post("/events", formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        );
        console.log(this.state.file)
      }

      handleChangeTitulo(event) {
        this.setState({titulo: event.target.value});
      }

      handleChangeDescricao(event) {
        this.setState({descricao: event.target.value});
      }
    
      handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){

        return (
            <div id="component-galeria-popup-administrador">
                <div id="popup-galeria-inner-administrador">
                    <div className="header-popup-galeria-administrador">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="content-popup-galeria-administrador">
                        <form>
                            <div className="item-content-popup-galeria-administrador">
                                <span>Título:</span>
                                <input type="text" className="input-content-popup-galeria-administrador" placeholder={this.props.title ? this.props.title : "Título do evento"} value={this.state.titulo} onChange={this.handleChangeTitulo} />
                            </div>
                            <div className="item-content-popup-galeria-administrador">
                                <span>Descrição:</span>
                                <input type="text" className="input-content-popup-galeria-administrador" placeholder={this.props.description ? this.props.description : "Descrição do evento"} value={this.state.descricao} onChange={this.handleChangeDescricao}/>
                            </div>
                            <div className="item-content-popup-galeria-administrador">
                                <input type="file"  className="input-image-content-popup-galeria-administrador" id="file" placeholder={this.props.image ? this.props.image : ""} onChange={this.handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className="footer-popup-galeria-administrador">
                        <button type="submit"  onClick={(e) => this.handleSubmit(e)} className="save-btn-popup-galeria-administrador">Salvar</button>
                        <button className="close-btn-popup-galeria-administrador" onClick={this.props.closePopup}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PopupGaleriaAdministrador);