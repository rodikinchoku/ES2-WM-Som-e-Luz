import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt }  from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import logoMenu from '../../Assets/Logo.png';
import { Link } from 'react-router-dom';

const Menu = () => {
    return( 
        <Navbar expand="lg" className="menu" >
        <Navbar.Brand className="logoMenu"><img alt="logo" src={logoMenu} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menuItems">
          <Link to="/Agenda_Admin" className="menuAdminLink"><span className="text">Agenda</span></Link>
            <Link to="/Galeria_de_Fotos_Admin" className="menuAdminLink"><span className="text">Galeria de Fotos</span></Link>
            <Link to="/Servicos_Admin" className="menuAdminLink"><span className="text">Serviços</span></Link>
          </Nav>
          <Link to="/Admin">
            <Button className="logoutButton" variant="outline-primary">
              <span className="text">Logout</span>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          </Link>
        </Navbar.Collapse>
       
      </Navbar>
    );
}

export default Menu;
