import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

import '../../../styles/components/Home/menu-home.css';

import MenuLogoHome from '../../../images/logo.png';

function MenuHome() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
            setClick(false);
        }
    }

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);

    const changeNavBackground = () => {
        if(window.scrollY >= 106) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavBackground);

    return (
        <div id="component-menu-home" className={navbar ? 'navbar active' : 'navbar'}>
        
            <ul className={click ? "content-component-menu-home" : "active-content-component-menu-home"}>
                <div className="icon-component-menu-home" onClick={handleclick}>
                    {click ? <FaTimes /> :  <FaBars />}
                </div>
                
                <Link to="/" onClick={closeMobileMenu}>
                    <img src={MenuLogoHome} alt="Logo" className="logo-component-menu-home" />
                </Link>

                <div className="items-content-component-menu-home">
                    <Link to="/servicos-oferecidos" style={{textDecoration: "none"}} onClick={closeMobileMenu}>
                        <li className="item-content-component-menu-home"><span>Serviços Oferecidos</span></li>
                    </Link>
                    <Link to="/sobre-nos" style={{textDecoration: "none"}} onClick={closeMobileMenu}>
                        <li className="item-content-component-menu-home"><span>Sobre nós</span></li>
                    </Link>
                    <Link to="/eventos-realizados" style={{textDecoration: "none"}} onClick={closeMobileMenu}>
                        <li className="item-content-component-menu-home"><span>Eventos Realizados</span></li>
                    </Link>
                    <Link to="/contato" style={{textDecoration: "none"}} onClick={closeMobileMenu}>
                        <li className="item-content-component-menu-home"><span>Contato</span></li>
                    </Link>

                    {button ? 
                        <div className="active-login-signup-component-menu-home">
                            <Link to="/login-signup">
                                <button href="/login-signup" className="active-login-button-content-component-menu-home">Login</button>
                            </Link>
                        </div>
                    :
                        <div className="mobile-login-signup-component-menu-home">
                            <Link to="/login-signup">
                                <button href="/login-signup" className="mobile-login-button-content-component-menu-home" onClick={closeMobileMenu}>Login</button>
                            </Link>
                        </div>
                    }  

                </div>
                    
            </ul>
        </div>
    );
}

export default MenuHome;