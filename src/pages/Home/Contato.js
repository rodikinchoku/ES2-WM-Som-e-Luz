import React from 'react';

import '../../styles/pages/home/contato.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import ContatoHome from '../../components/Home/Contato/ContatoHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';



const Contato = () => {
    return (
        <div id="page-contato">
            <MenuHome />
            <ContatoHome />
            <RodapeHome />
        </div>
    );
}

export default Contato;