import React, { Component } from 'react';
import  FormLoginAdmin  from '../../Components/FormLoginAdmin';
import logo from '../../Assets/Logo.png';
import './style.css';

//Página de Login do Administrador

class Login_Admin extends Component {
    render() {
        return (
          <div className="centro">
          <img alt="logo" className="logoLogin" src={logo} />
          <FormLoginAdmin className="form" />
          </div>
        );
    }
}

export default Login_Admin;