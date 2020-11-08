import React from 'react';
import Menu  from '../../Components/Menu';
import ImageGalleryAdmin from '../../Components/ImageGalleryAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './style.css';

export const Galeria_Admin = () => {
  const history = useHistory();

  return (
    <div className="header">
    <Menu />
    <div className="title">
      <h1 className="galeriaAdminTitle">Galeria de Fotos</h1>
      <button onClick={() => history.push('/Novo_Evento')}>  <FontAwesomeIcon icon={faPlusSquare} /> </button>
    </div>
    <ImageGalleryAdmin />
    </div>
  );
}