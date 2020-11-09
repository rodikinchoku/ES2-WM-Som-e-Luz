import React from 'react';
import Menu  from '../../Components/Menu';
import ImageGalleryAdmin from '../../Components/ImageGalleryAdmin';
import './style.css';

export const Galeria_Admin = () => {

  return (
    <div className="header">
    <Menu />
    <div className="title">
      <h1 className="galeriaAdminTitle">Galeria de Fotos</h1>
    </div>
    <ImageGalleryAdmin />
    </div>
  );
}