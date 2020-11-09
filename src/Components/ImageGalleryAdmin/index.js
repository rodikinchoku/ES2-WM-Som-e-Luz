import React, { useEffect, useState } from 'react';
import CardImage from '../CardImages';
import './style.css';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';



const ImageGalleryAdmin = () => {
        
    //Variáveis 
    const [images, setImages] = useState("");
    const history = useHistory();
    const [isEditing, setIsEditing] = useState(false);
    const edit = () => setIsEditing(true);
    const done = () => setIsEditing(false);
    const [value,setValue] = useState(false);

    //Funções  

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await Axios.get("http://localhost:3333/events",  { 
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        console.log(response.data)
        setImages(response.data);
    }

    const handleDelete = async (itemId) => {
        await Axios.delete(`http://localhost:3333/events/${itemId}`,  { 
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        setImages(images.filter(item => item.id !== itemId ))
    }

    const handleEdit = async () => {
        if(isEditing){
            setIsEditing(done);
            setValue(false);
            return(value);
        }
        setIsEditing(edit);
        setValue(true);
        return(value);
    }

    return (
        <div className="galeria_Admin">
            <Button  className="addImageBtn" variant="outline-primary" onClick={() => history.push('/Novo_Evento')}>  
                Adicionar imagens
            </Button>
            <div className="image_container">
                {images && images.map((Item, index) => {
                    return (
                        <div>
                            <CardImage  className="cardPicture" key={index} id={Item.id} image={Item.images.url} title={Item.title} description={Item.description} value={value} />
                            <Button className="galeriaAdminBtnAdd" variant="outline-secondary"  onClick={() => handleEdit()} >
                                <FontAwesomeIcon icon={faPenSquare} />
                            </Button>
                            <Button className="galeriaAdminBtnDell" variant="outline-secondary" onClick={() => handleDelete(Item.id)} >
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ImageGalleryAdmin;
