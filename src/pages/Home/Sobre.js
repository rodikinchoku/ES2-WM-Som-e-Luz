import React from 'react';

import '../../styles/pages/home/sobre.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import SobreHome from '../../components/Home/Sobre/SobreHome';
import EventosHome from '../../components/Home/Eventos Realizados/EventosHome';
import ContatoHome from '../../components/Home/Contato/ContatoHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';



const Sobre = () => {
    return (
        <div id="page-sobre">
            <MenuHome />
            <SobreHome />
            <EventosHome />
            <ContatoHome />
            <RodapeHome />
        </div>
    );
}

export default Sobre;