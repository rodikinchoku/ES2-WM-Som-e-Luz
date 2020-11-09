import React, { Fragment, useState, useRef } from 'react';
import Menu  from '../../Components/Menu';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

import './style.css';

export const Novo_Evento = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState('');
  const el = useRef(); // accesing input element
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', file); 

    await Axios.post("http://localhost:3333/events", formData, { 
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });

    history.push('/Galeria_de_Fotos_Admin');
  }

  const handleChange = (e) => {
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
    console.log(file)
  }

  return (
    <Fragment>
      <Menu />
      <h1 className="textAddImageGallery">Adicionar novo Evento</h1>
      <Button  className="Voltar" variant="outline-info" onClick={() => history.push('/Galeria_de_Fotos_Admin')}>  
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
      </Button>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="title" >
            <FormLabel className="newEventImageText">Título</FormLabel>
            <FormControl autoFocus type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </FormGroup>
          <FormGroup controlId="description" >
            <FormLabel className="newEventImageText" >Descrição</FormLabel>
            <FormControl type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </FormGroup>
          <input className="adicionaArquivo" type="file" ref={el} onChange={e => handleChange(e)} />
          <Button block type="submit">
            Criar Evento
          </Button>
        </form>
      </div>
    </Fragment>
  )
}
