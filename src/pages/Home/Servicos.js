import React from 'react';

import '../../styles/pages/home/servicos.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import ServicosHome from '../../components/Home/Servicos/ServicosHome';
import SobreHome from '../../components/Home/Sobre/SobreHome';
import EventosHome from '../../components/Home/Eventos Realizados/EventosHome';
import ContatoHome from '../../components/Home/Contato/ContatoHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';



const Servicos = () => {
    return (
        <div id="page-servicos">
            <MenuHome />
            <ServicosHome />
            <SobreHome />
            <EventosHome />
            <ContatoHome />
            <RodapeHome />
        </div>
    );
}

export default Servicos;