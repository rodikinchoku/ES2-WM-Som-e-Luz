import React, { useEffect, useState } from 'react';
import CardImage from '../CardImages';
import './style.css';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';


const ImageGalleryAdmin = () => {
        
    //Variáveis 
    const [images, setImages] = useState("");

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

    return (
        <div className="galeria_Admin">
            <div className="image_container">
                {images && images.map((Item, index) => {
                    return (
                        <div>
                            <CardImage className="cardPicture" key={index} id={Item.id} image={Item.images.url} title={Item.title} description={Item.description} />
                            <Button className="galeriaAdminBtnAdd" variant="outline-secondary">Editar</Button>
                            <Button className="galeriaAdminBtnDel" variant="outline-secondary" onClick={() => handleDelete(Item.id)} >Remover</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ImageGalleryAdmin;
