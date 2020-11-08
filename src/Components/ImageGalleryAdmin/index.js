import React, { Component, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardImage from '../CardImages';
import './style.css';
import FirstGallery from '../../Assets/FirstGallery.jpg';
import Axios from 'axios';


const ImageGalleryAdmin = () => {
        
    //Variáveis 
    const [images, seImages] = useState("");

    //Funções  

    useEffect(async () => {
        images = await Axios.get("http://localhost:3333/images:path"), {
            image, title, description
        }
    })

    return (
        <div className="galeria_Admin">
            <div>
            {images.map((Item, index) => {
                return (
                    <CardImage className="cardPicture" key={index} image={Item.image} title={Item.title} description={Item.description} />
                )
            })}
            </div>
            <Card className="cardPlus">
                <Card.Img variant="top"  src={FirstGallery} />
            </Card>
        </div>
    );
}

export default ImageGalleryAdmin;
