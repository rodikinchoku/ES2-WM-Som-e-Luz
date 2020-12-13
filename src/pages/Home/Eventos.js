import React from 'react';

import '../../styles/pages/home/eventos.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import EventosHome from '../../components/Home/Eventos Realizados/EventosHome';
import ContatoHome from '../../components/Home/Contato/ContatoHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';



const Eventos = () => {
    return (
        <div id="page-eventos">
            <MenuHome />
            <EventosHome />
            <ContatoHome />
            <RodapeHome />
        </div>
    );
}

export default Eventos;