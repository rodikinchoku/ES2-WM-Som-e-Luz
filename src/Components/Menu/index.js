import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt }  from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Menu = () => {
    return( 
        <Navbar expand="lg" className="menu" >
        <Navbar.Brand className="logo">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menuItems">
            <Nav.Link href="#home"><span className="text">Agenda</span></Nav.Link>
            <Nav.Link href="#link"><span className="text">Galeria de Fotos</span></Nav.Link>
            <Nav.Link href="#link"><span className="text">Serviços</span></Nav.Link>
          </Nav>
          <Button className="logoutButton" variant="outline-primary">
            <span className="text">Logout</span>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Button>
        </Navbar.Collapse>
       
      </Navbar>
    );
}

export default Menu;
