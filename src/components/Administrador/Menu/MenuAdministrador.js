import React from 'react';
import { NavLink } from  'react-router-dom';

import { MenuAdministradorData } from './MenuAdministradorData';

import '../../../styles/components/Administrador/menu-administrador.css';

import logoMenuAdmin from '../../../images/logo.png';

const MenuAdministrador = () => {
        return (
            <div id="component-menu-administrador">
                
                <div className="logo-menu-administrador">
                    <img src={logoMenuAdmin} alt="logo"/>
                    <span>WM Som e Luz</span>
                </div>
                
                <div className="items-menu-administrador">
                    <nav>
                        <ul>
                            {MenuAdministradorData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        {item.icon}
                                        <NavLink className="link-menu-administrador" activeStyle={{color: "#ffa64d"}}  to={item.path}>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
    
                <div className="info-menu-administrador">
                    <strong>Área Administrador</strong>
                </div>
                
            </div>
        );
}

export default MenuAdministrador;