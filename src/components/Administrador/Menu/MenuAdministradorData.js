import React from 'react';
import { FaCalendarAlt, FaImages, FaWrench } from 'react-icons/fa';

export const MenuAdministradorData = [
    {
        title: 'Agenda',
        path: '/agenda-admin',
        icon: <FaCalendarAlt />,
        cName: 'content-menu-administrador'
    },
    {
        title: 'Galeria de Fotos',
        path: '/galeria-de-fotos-admin',
        icon: <FaImages />,
        cName: 'content-menu-administrador'
    },
    {
        title: 'Serviços',
        path: '/servicos-admin',
        icon: <FaWrench />,
        cName: 'content-menu-administrador'
    }
]