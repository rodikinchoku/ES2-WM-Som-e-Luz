import React from 'react';
import { FaPhoneSquare, FaEnvelopeSquare, FaFacebookSquare } from 'react-icons/fa';

import '../../../styles/components/Home/contato-home.css';

const ContatoHome = () => {
    return (
        <div id="component-contato-home">
            <div className="header-component-contato-home">
                <h1>Contato</h1>
            </div>

            <div className="content-component-contato-home">
                <div className="info-content-component-contato-home">
                    <p className="text-info-content-component-contato-home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="item-info-content-component-contato-home">
                        <FaPhoneSquare className="icon-item-info-content-component-contato-home"/>
                        <span className="text-item-info-content-component-contato-home">Telefone</span>
                    </div>
                    <div className="item-info-content-component-contato-home">
                        <FaEnvelopeSquare className="icon-item-info-content-component-contato-home"/>
                        <span className="text-item-info-content-component-contato-home">Email</span>
                    </div>
                    <div className="item-info-content-component-contato-home">
                        <FaFacebookSquare className="icon-item-info-content-component-contato-home"/>
                        <span className="text-item-info-content-component-contato-home">Redes Sociais</span>
                    </div>
                </div>
                <div className="form-content-component-contato-home">
                    <input type="input" class="item-form-content-component-contato-home" placeholder="Nome"/>
                    <input type="input" class="item-form-content-component-contato-home" placeholder="Telefone"/>
                    <input type="input" class="item-form-content-component-contato-home" placeholder="Email"/>
                    <input type="input" class="text-form-content-component-contato-home" placeholder="Mensagem"/>
                    <button className="btn-form-content-component-contato-home">Enviar</button>
                </div>
                
            </div>
        </div>
    );
}

export default ContatoHome;