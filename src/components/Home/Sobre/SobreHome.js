import React from 'react';

import '../../../styles/components/Home/sobre-home.css';

import sobreImg from '../../../images/sobre.jpg';

const SobreHome = () => {
    return (
        <div id="component-sobre-nos-home">
            <div className="header-component-sobre-nos-home">
                <h1>Sobre WM</h1>
            </div>

            <div className="content-component-sobre-nos-home">
                <div className="texto-content-component-sobre-nos-home">
                A WM Som e Luz é uma empresa de sonorização e iluminação para eventos e festas que está no mundo da música, eventos e festas mais de 30 anos.  O nosso objetivo é garantir que o sua festa dos sonhos se torne realidade e poder contribuir com isto é o que nos dá motivação!
                </div>
                <img src={sobreImg} alt="" className="image-content-component-sobre-nos-home"/>
            </div>
        </div>
    );
}

export default SobreHome;