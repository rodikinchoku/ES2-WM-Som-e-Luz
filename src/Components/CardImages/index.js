import React  from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const CardImage = ({ image, title, description, id }) => {

    return (
        <div className="galeria_Admin">
            <Card className="cardPicture">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardImage;
