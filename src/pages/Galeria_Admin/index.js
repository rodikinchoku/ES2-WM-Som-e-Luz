import React, { Component } from 'react';
import Menu  from '../../Components/Menu';
import ImageGalleryAdmin from '../../Components/ImageGalleryAdmin';
import './style.css';

class Galeria_Admin extends Component {
    render() {
        return (
          <div className="header">
          <Menu />
          <h1 className="galeriaAdminTitle">Galeria de Fotos</h1>
          <ImageGalleryAdmin />
          </div>
        );
    }
}

export default Galeria_Admin;