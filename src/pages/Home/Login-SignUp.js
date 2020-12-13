import React from 'react';

import '../../styles/pages/home/login-signup.css';

import MenuHome from '../../components/Home/Menu/MenuHome';
import RodapeHome from '../../components/Home/Rodape/RodapeHome';




const LoginSignup = () => {
    return (
        <div id="page-login-signup">
            <MenuHome />
            <div className="content-page-login-signup">
                <div className="login-content-page-login-signup">
                    <h1>Login</h1>
                    <div className="form-content-page-login-signup">
                        <span class="text-content-page-login-signup">Email</span>
                        <input type="text" />
                        <span class="text-content-page-login-signup">Senha</span>
                        <input type="text" />
                        <div className="btn-content-page-login-signup">
                            <button >Entrar</button>
                        </div>
                    </div>
                </div>
                <div className="signup-content-page-login-signup">
                    <h1>Cadastrar</h1>
                    <div className="form-content-page-login-signup">
                        <span class="text-content-page-login-signup">Nome</span>
                        <input type="text" />
                        <span class="text-content-page-login-signup">Email</span>
                        <input type="text" />
                        <span class="text-content-page-login-signup">Senha</span>
                        <input type="text" />
                        <div className="btn-content-page-login-signup">
                            <button>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            <RodapeHome />
        </div>
    );
}

export default LoginSignup;