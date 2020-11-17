import React, { Component } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../../../services/auth';
import { withRouter } from 'react-router-dom';

import { HeaderAdministradorData } from './HeaderAdministradorData';

import '../../../styles/components/Administrador/header-administrador.css';

class HeaderAdministrador extends Component {

    handleLogout = (e) => {
        logout();
        this.props.history.push("/admin");
    }

    
    render() {
        return(
            <div id="component-header-administrador">
                    <div className="header-administrador-texto">
                    {HeaderAdministradorData.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.cName === this.props.name ? ( 
                                        <>
                                        <h1>{item.title}</h1>
                                        <p>{item.descricao}</p>
                                        </>
                                    ) : ''
                                } 
                            </div>
                        )
                    })}
                    </div>
    
                    <div className="header-btn-logout-administrador">
                        <button onClick={this.handleLogout}>
                            <span>Logout</span>
                            <FaSignOutAlt className="icon-btn-header-administrador"/>
                        </button>
                        
                    </div>
            </div>
        );
    }
}

export default withRouter(HeaderAdministrador);