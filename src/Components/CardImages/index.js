import React, { useState }  from 'react';
import Card from 'react-bootstrap/Card';
import EditInPlace from '../EditInPlace';
import './style.css';

const CardImage = ({ image, title, description, id , value}) => {

    const [title1, setTitle1] = useState(title);
    const [description1, setDescription1] = useState(description);

    return (
        <div className="galeria_Admin">
            <Card className="cardPicture">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        {value === true ?  <EditInPlace value={title1} onChangeValue={setTitle1} /> : title1}  
                    </Card.Title>
                    <Card.Text>
                        {value === true ?  <EditInPlace value={description1} onChangeValue={setDescription1} /> :  description1}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardImage;
