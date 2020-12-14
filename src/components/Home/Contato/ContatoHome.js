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
                    <p className="text-info-content-component-contato-home">
                    Vai fazer uma festa e quer uma cotação? Basta preencher o Formulário ao lado que nosso time entrará em contato com você o mais breve possível.<br />
                    Com a WM, a sua festa será inesquecível!
                    </p>
                    <div className="item-info-content-component-contato-home">
                        <FaPhoneSquare className="icon-item-info-content-component-contato-home"/>
                        <a className="text-item-info-content-component-contato-home" href="tel:(15)99116-3093">(15)99116-3093</a>
                    </div>
                    <div className="item-info-content-component-contato-home">
                        <FaEnvelopeSquare className="icon-item-info-content-component-contato-home"/>
                        <a className="text-item-info-content-component-contato-home" href="mailto:contato@wmsomeluz.com.br">contato@wmsomeluz.com.br</a>
                    </div>
                    <div className="item-info-content-component-contato-home">
                        <FaFacebookSquare className="icon-item-info-content-component-contato-home"/>
                        <a className="text-item-info-content-component-contato-home" href="https://www.facebook.com/wm.som.luz">/wm.som.luz</a>
                    </div>
                </div>
                <div className="form-content-component-contato-home">
                    <input type="input" className="item-form-content-component-contato-home" placeholder="Nome"/>
                    <input type="input" className="item-form-content-component-contato-home" placeholder="Telefone"/>
                    <input type="input" className="item-form-content-component-contato-home" placeholder="Email"/>
                    <input type="input" className="text-form-content-component-contato-home" placeholder="Mensagem"/>
                    <button className="btn-form-content-component-contato-home">Enviar</button>
                </div>
                
            </div>
        </div>
    );
}

export default ContatoHome;