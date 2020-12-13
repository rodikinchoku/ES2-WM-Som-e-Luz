import React from 'react';

import '../../../styles/components/Home/rodape-home.css';

import logoRodape from '../../../images/logo.png';

const RodapeHome = () => {
    return (
        <div id="component-rodape-home">
            <div className="content-component-rodape-home">
                <div  className="logo-content-component-rodape-home">
                    <img src={logoRodape} alt="Logo"/>
                </div>
                <p>Wm Som e Luz 2020</p>
            </div>
        </div>
    );
}

export default RodapeHome;