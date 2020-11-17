import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import '../../styles/pages/administrador/login-administrador.css';


import logoImg from '../../images/logo.png';

class LoginAdministrador extends Component {

    //Variáveis 

    state = {
        email: "",
        password: "",
        error: ""
    };

    //Funções 

    handleSignIn = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
          try {
            const response = await api.post("/sessions", { email, password });
            login(response.data.token);
            this.props.history.push("/agenda-admin");
          } catch (err) {
            this.setState({
              error:
                "Usuário e/ou senha inválidos !"
            });
          }
        }
      };
    
    render () {
        return (
            <div id="page-login-administrador">
                <div className="content-login-administrador">
                    <form onSubmit={this.handleSignIn}>
                        <img alt="logo" src={logoImg} />
                        {this.state.error && <p>{this.state.error}</p>}
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        );
    }
    
}

export default withRouter(LoginAdministrador);

