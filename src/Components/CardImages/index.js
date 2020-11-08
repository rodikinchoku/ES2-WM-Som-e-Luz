import React  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

const CardImage = (image, title, description) => {
    return (
        <div className="galeria_Admin">
            <Card className="cardPicture">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button className="galeriaAdminBtnAdd" variant="outline-secondary">Editar</Button>
                    <Button className="galeriaAdminBtnDel" variant="outline-secondary">Remover</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardImage;
