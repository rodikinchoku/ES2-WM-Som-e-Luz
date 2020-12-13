import React from 'react';

import '../../styles/pages/home/home.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import ServicosHome from '../../components/Home/Servicos/ServicosHome';
import SobreHome from '../../components/Home/Sobre/SobreHome';
import EventosHome from '../../components/Home/Eventos Realizados/EventosHome';
import ContatoHome from '../../components/Home/Contato/ContatoHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';



const Home = () => {
    return (
        <div id="page-home">
            <MenuHome />
            <div className="content-page-home">a</div>
            <ServicosHome />
            <SobreHome />
            <EventosHome />
            <ContatoHome />
            <RodapeHome />
        </div>
    );
}

export default Home;